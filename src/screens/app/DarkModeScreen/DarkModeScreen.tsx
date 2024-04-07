import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import React from 'react';
import {RadioButtonSelector} from 'src/components/RadioButton/RadioButtonSelector';

const items = [
  {
    label: 'Ativado',
  },
  {
    label: 'Desativado',
  },
  {
    label: 'Padrão do sistema',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
  },
];

export const DarkModeScreen = ({}: AppScreenProps<'DarkModeScreen'>) => {
  return (
    <Screen canGoBack title="Modo escuro">
      <Text>DarkModeScreen</Text>
      <RadioButtonSelector items={items} />
    </Screen>
  );
};
