import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
