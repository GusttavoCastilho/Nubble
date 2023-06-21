import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">My Profile Screen</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
