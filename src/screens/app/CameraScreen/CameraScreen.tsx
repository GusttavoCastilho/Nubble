import React, {useState} from 'react';

import {Box, Icon} from '@components';
import {AppScreenProps} from '@routes';
import {Dimensions, StyleSheet} from 'react-native';
import {useAppSafeArea} from '@hooks';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flash, setFlash] = useState(false);

  function toggleFlash() {
    setFlash(prevState => !prevState);
  }
  return (
    <Box flex={1}>
      <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />

      <Box flex={1} justifyContent="space-between">
        <Box
          backgroundColor="black60"
          height={CONTROL_HEIGHT - CONTROL_DIFF}
          style={{paddingTop: top}}
          paddingHorizontal="s24"
          flexDirection="row"
          justifyContent="space-between">
          <Icon
            size={20}
            color="grayWhite"
            name="arrowLeft"
            onPress={navigation.goBack}
          />
          <Icon
            size={20}
            color="grayWhite"
            name={flash ? 'flashOn' : 'flashOff'}
            onPress={toggleFlash}
          />
          <Box width={20} />
        </Box>

        <Box
          backgroundColor="black60"
          height={CONTROL_HEIGHT + CONTROL_DIFF}
          alignItems="center"
          justifyContent="center">
          <Icon name="cameraClick" color="grayWhite" />
        </Box>
      </Box>
    </Box>
  );
}
