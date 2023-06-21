import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Favorite Screen</Text>
      <Button
        title="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
