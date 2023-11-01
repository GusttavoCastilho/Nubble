import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {SignUpData} from '../authTypes';

export function useAuthSignUp(options?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    signUp: (signUpData: SignUpData) => mutation.mutate(signUpData),
  };
}
