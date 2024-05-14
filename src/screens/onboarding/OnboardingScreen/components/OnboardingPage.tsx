import React from 'react';
import {Box} from '@components';
import {ImageHeader} from './ImageHeader';
import {OnboardingPageItem} from '../onboardingData';
import {Content} from './Content';
import {BottomMenu} from './BottomMenu';
import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export type OnboardingPageProps = {
  pageItem: OnboardingPageItem;
  onPressNext: () => void;
  onPressSkip: () => void;
};

export function OnboardingPage({
  pageItem,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) {
  return (
    <Box flex={1} backgroundColor="background" width={SCREEN_WIDTH}>
      <Box flex={4}>
        <ImageHeader image={pageItem.image} />
      </Box>

      <Box flex={5} paddingHorizontal="s24">
        <Content {...pageItem} />
      </Box>

      <Box flex={1} paddingHorizontal="s24">
        <BottomMenu onPressNext={onPressNext} onPressSkip={onPressSkip} isLast={pageItem.isLast} />
      </Box>
    </Box>
  );
}
