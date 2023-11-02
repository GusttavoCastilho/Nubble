import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

type InterceptorsProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => void;
};

export function registerInterceptors({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorsProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.refreshToken(
          authCredentials?.refreshToken,
        );

        await saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );
  return () => {
    api.interceptors.response.eject(interceptor);
  };
}
