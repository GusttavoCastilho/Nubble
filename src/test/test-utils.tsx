import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RenderOptions, render, renderHook} from '@testing-library/react-native';

import {theme} from '@theme';

export const wrapperAllProviders = () => {
  const queryClient = new QueryClient({
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
  });
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender<T = unknown>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {wrapper: wrapperAllProviders(), ...options});
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
export {customRenderHook as renderHook};
