import React from 'react';

import {AppScreenProps} from '@routes';

import {Button, Screen, Text} from '@components';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
