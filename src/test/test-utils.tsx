import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AuthCredentialsProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {RenderOptions, render, renderHook} from '@testing-library/react-native';

import {Toast} from '@components';
import {theme} from '@theme';

const queryClientConfig: QueryClientConfig = {
  logger: {
    log: console.log,
    warn: console.warn,
    // @ts-ignore
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
};

export const wrapperAllProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export const wrapperScreenProviders = () => {
  const queryClient = new QueryClient(queryClientConfig);
  return ({children}: {children: React.ReactNode}) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
          <Toast />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

function customRender<T = unknown>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: wrapperAllProviders(), ...options});
}

function renderScreen<T = unknown>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: wrapperScreenProviders(), ...options});
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapperAllProviders(),
    ...options,
  });
}

export * from '@testing-library/react-native';
export {customRender as render};
export {renderScreen};
export {customRenderHook as renderHook};
