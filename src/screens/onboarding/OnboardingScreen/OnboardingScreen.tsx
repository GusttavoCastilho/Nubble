import React, {useRef, useState} from 'react';
import {Box} from '@components';
import {OnboardingScreenProps} from '@routes';
import {OnboardingPage} from './components/OnboardingPage';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {OnboardingPageItem, onboardingPages} from './onboardingData';
import { useSettingsService } from '@services';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = useState(0);

  const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

  const {finishOnboarding} = useSettingsService();

  function onPressNext() {
    if (pageIndex === onboardingPages.length - 1) {
      finishOnboarding();
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: pageIndex + 1,
      animated: true,
    });

    setPageIndex(prev => prev + 1);
  }

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        pageItem={item}
        onPressNext={onPressNext}
        onPressSkip={finishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="background">
      <FlatList
        ref={flatListRef}
        data={onboardingPages}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </Box>
  );
}
