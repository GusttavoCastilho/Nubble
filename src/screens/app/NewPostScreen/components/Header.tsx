import React from 'react';

import {Box, BoxProps, Button, Icon, Text} from '@components';
import {Image, ImageBackground} from 'react-native';

interface Props {
  imageUri: string;
  imageWidth: number;
}

export function Header({imageUri, imageWidth}: Props) {
  return (
    <Box>
      <ImageBackground
        source={{uri: imageUri}}
        style={{
          width: imageWidth,
          height: imageWidth,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Button title="Escolher essa" preset="ghost" mb="s24" />
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
