import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title'>;

export function ScreenHeader({title}: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24">
      <TouchableOpacityBox
        onPress={handleGoBack}
        flexDirection="row"
        testID="back-button"
        alignItems="center">
        <Icon name="arrowLeft" color="primary" />
        {!title && (
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        )}
      </TouchableOpacityBox>
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={20} />}
    </Box>
  );
}
