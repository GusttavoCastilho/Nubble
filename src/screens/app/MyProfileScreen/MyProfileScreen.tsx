import React from 'react';

import {useAuthCredentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  const {authCredentials} = useAuthCredentials();
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text preset="headingMedium">{authCredentials?.user.fullName}</Text>
      </Box>
      <Icon
        name="settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
