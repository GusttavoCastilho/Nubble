import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Home Screen</Text>
    </Screen>
  );
}
