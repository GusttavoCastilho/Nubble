import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  Box,
  BoxProps,
  Icon,
  ScreenProps,
  Text,
  TouchableOpacityBox,
} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'> &
  BoxProps;

export function ScreenHeader({
  title,
  canGoBack,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  if (!title && !canGoBack && !HeaderComponent) return null;

  const showBackLabel = !title && !HeaderComponent;
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24"
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          onPress={handleGoBack}
          flexDirection="row"
          testID="back-button"
          mr="s10"
          alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20} />}
    </Box>
  );
}
