import React, {createContext, useEffect, useState} from 'react';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

import {AuthCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        if (responseError.response.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCredentials();
            return Promise.reject(responseError);
          }
          const failedRequest = responseError.config;

          const newAuthCredentials = await authService.refreshToken(
            authCredentials?.refreshToken,
          );

          await saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      },
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [authCredentials?.refreshToken]);

  async function startAuthCredentials() {
    try {
      const credentials = await AuthCredentialsStorage.get();
      if (credentials) {
        authService.updateToken(credentials.token);
        setAuthCredentials(credentials);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(credentials: AuthCredentials) {
    authService.updateToken(credentials.token);
    AuthCredentialsStorage.set(credentials);
    setAuthCredentials(credentials);
  }

  async function removeCredentials() {
    authService.removeToken();
    AuthCredentialsStorage.remove();
    setAuthCredentials(null);
  }
  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
