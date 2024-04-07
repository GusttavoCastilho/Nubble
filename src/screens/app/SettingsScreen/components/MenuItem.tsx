import {Icon, PressableBox, Text} from '@components';
import React from 'react';

export type MenuItemProps = {
  label: string;
  onPress: () => void;
};

export const MenuItem = ({label, onPress}: MenuItemProps) => {
  return (
    <PressableBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="s16"
      >
      <Text>{label}</Text>
      <Icon name="chevronRight" />
    </PressableBox>
  );
};
