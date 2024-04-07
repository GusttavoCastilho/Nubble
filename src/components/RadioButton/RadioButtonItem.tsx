import React from 'react';
import {RadioButton, RadioButtonProps} from './RadioButton';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export type RadioButtonItemProps = RadioButtonProps & {
  label: string;
  description?: string;
};

export const RadioButtonItem = ({
  label,
  description,
  ...props
}: RadioButtonItemProps) => {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text semiBold>{label}</Text>
        <RadioButton {...props} />
      </Box>

      {description && (
        <Text color="paragraphSecondary" style={{width: '80%'}}>
          {description}
        </Text>
      )}
    </Box>
  );
};
