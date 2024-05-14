import React from 'react';

import {Image, Dimensions} from 'react-native';

import {OnboardingPageItem} from '../onboardingData';
import {useAppColor} from '@services';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type ImageHeaderProps = {
  image: OnboardingPageItem['image'];
};

export function ImageHeader({image}: ImageHeaderProps) {
  const appColor = useAppColor();

  const source = appColor === 'light' ? image.light : image.dark;
  return <Image source={source} style={{width: SCREEN_WIDTH, height: '90%'}} />;
}
