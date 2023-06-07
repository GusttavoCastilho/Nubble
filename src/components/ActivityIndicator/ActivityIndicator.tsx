import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import {useTheme} from '@shopify/restyle';

import {Theme, ThemeColors} from '../../theme/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color, ...rest}: Props) {
  const {colors} = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} {...rest} />;
}
