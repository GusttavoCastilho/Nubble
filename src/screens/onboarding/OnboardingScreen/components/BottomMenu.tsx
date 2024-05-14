import React from 'react';
import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast: boolean;
};

export function BottomMenu({isLast, onPressNext, onPressSkip}: BottomMenuProps) {
  const nextText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text color="gray2" semiBold>
          Pular
        </Text>
      </PressableBox>
      <PressableBox
        onPress={onPressNext}
        flexDirection="row"
        alignItems="center"
        hitSlop={10}>
        <Text bold mr="s4">
          {nextText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
