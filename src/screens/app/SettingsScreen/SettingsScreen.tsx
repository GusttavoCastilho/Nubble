import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator} from '@components';
import {AppScreenProps} from '@routes';
import {MenuItem, MenuItemProps} from './components/MenuItem';
import {FlatList, ListRenderItemInfo} from 'react-native';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {
      label: 'Termos de uso',
      onPress: () => {},
    },
    {
      label: 'Política de privacidade',
      onPress: () => {},
    },
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate("DarkModeScreen"),
    },
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen canGoBack title="Configurações" flex={1}>
      <FlatList
        data={items}
        bounces={false}
        keyExtractor={item => item.label}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button
            mt="s48"
            loading={isLoading}
            title="Sair da conta"
            onPress={signOut}
          />
        }
      />
    </Screen>
  );
}
