import React from 'react';
import {Box, ProgressIndicator, Text} from '@components';
import {OnboardingPageItem} from '../onboardingData';

type ContentProps = Omit<OnboardingPageItem, 'image'>;

export function Content({title, subtitle, total, index}: ContentProps) {
  return (
    <Box>
      <ProgressIndicator total={total} currentIndex={index} mb="s24" />
      <Text preset="headingLarge">
        {title.map(({text, highlight}, index) => (
          <Text
            key={index}
            preset="headingLarge"
            color={highlight ? 'carrotSecondary' : 'backgroundContrast'}>
            {text}
          </Text>
        ))}
      </Text>
      <Text mt="s16" preset="paragraphLarge">{subtitle}</Text>
    </Box>
  );
}
