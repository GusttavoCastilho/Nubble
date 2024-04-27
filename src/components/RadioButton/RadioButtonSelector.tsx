import React from 'react';
import {Box} from '../Box/Box';
import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem';
import {Separator} from '../Separator/Separator';

type ItemTConstraint = Record<string, any>;

export type RadioButtonSelectorProps<ItemT extends ItemTConstraint> = {
  items: ItemT[];
  selectedItem?: ItemT;
  onSelect: (item: ItemT) => void;
  labelKey: keyof ItemT;
  descriptionKey: keyof ItemT;
  valueKey: keyof ItemT;
};

export const RadioButtonSelector = <ItemT extends ItemTConstraint>({
  items,
  selectedItem,
  onSelect,
  labelKey,
  descriptionKey,
  valueKey,
}: RadioButtonSelectorProps<ItemT>) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item[labelKey]}>
          <RadioButtonItem
            label={item[labelKey]}
            description={item[descriptionKey]}
            onPress={() => onSelect(item)}
            isSelected={
              selectedItem && selectedItem[valueKey] === item[valueKey]
            }
          />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
};
