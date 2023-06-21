import React from 'react';

import {AppScreenProps} from '@routes';

import {Screen, Text} from '@components';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Home Screen</Text>
    </Screen>
  );
}
