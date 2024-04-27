import React, {useEffect} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/authCredentialsProvider';
import {MMKVStorage, initializeStorage} from './src/services/storage';
import {ToastProvider} from './src/services/toast';
import {darkTheme, theme} from './src/theme/theme';
import {settingsService, useAppColor} from '@services';
import {useAppColorScheme} from '@hooks';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): JSX.Element {
  const appColor = useAppColor();
  useAppColorScheme();

  useEffect(() => {
    settingsService.handleStatusBarColor(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
