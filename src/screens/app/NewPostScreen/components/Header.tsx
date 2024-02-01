import React from 'react';

import {Box, BoxProps, Button, Icon, Text} from '@components';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '@assets';

interface Props {
  imageUri: string;
  imageWidth: number;
}

export function Header({imageUri, imageWidth}: Props) {
  const navigation = useNavigation();

  function navigateToPublishPostScreen() {
    if (imageUri) {
      navigation.navigate('PublishPostScreen', {imageUri});
    }
  }
  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
        style={{
          width: imageWidth,
          height: imageWidth,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {imageUri && (
          <Button
            title="Escolher essa"
            preset="ghost"
            mb="s24"
            onPress={navigateToPublishPostScreen}
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
};
