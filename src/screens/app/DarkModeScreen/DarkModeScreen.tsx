import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import {useSettingsService, useThemePreference} from '@services';
import React, {useState} from 'react';
import {RadioButtonSelector} from 'src/components/RadioButton/RadioButtonSelector';

type ThemePreference = 'light' | 'dark' | 'system';

type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

const items: Option[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistema',
    themePreference: 'system',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
  },
];

export const DarkModeScreen = ({}: AppScreenProps<'DarkModeScreen'>) => {
  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = items.find(
    item => item.themePreference === themePreference,
  );

  function setSelectedItem(item: Option) {
    setThemePreference(item.themePreference);
  }

  return (
    <Screen canGoBack title="Modo escuro">
      <Text>DarkModeScreen</Text>
      <RadioButtonSelector
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        items={items}
        labelKey="label"
        valueKey="themePreference"
        descriptionKey="description"
      />
    </Screen>
  );
};
