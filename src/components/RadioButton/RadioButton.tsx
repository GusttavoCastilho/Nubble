import React from 'react';
import {Box, PressableBox} from '../Box/Box';

export type RadioButtonProps = {
  isSelected?: boolean;
  onPress?: () => void;
};

export const RadioButton = ({isSelected, onPress}: RadioButtonProps) => {
  return (
    <PressableBox
      onPress={onPress}
      justifyContent="center"
      alignItems="center"
      height={20}
      width={20}
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : undefined}
      hitSlop={10}
      borderRadius="s12">
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        width={12}
        height={12}
        borderRadius="s8"
      />
    </PressableBox>
  );
};
