import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">New Post Screen</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
