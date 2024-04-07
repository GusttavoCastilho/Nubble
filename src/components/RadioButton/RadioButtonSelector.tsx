import React from 'react';
import {Box} from '../Box/Box';
import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem';
import {Separator} from '../Separator/Separator';

export const RadioButtonSelector = ({
  items,
}: {
  items: RadioButtonItemProps[];
}) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem {...item} />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
};
