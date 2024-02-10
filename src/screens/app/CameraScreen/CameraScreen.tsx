import React, {useState} from 'react';

import {Box, Icon, PermissionManager} from '@components';
import {AppScreenProps} from '@routes';
import {Dimensions, StyleSheet} from 'react-native';
import {useAppSafeArea, useAppState} from '@hooks';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const {top} = useAppSafeArea();
  const [flash, setFlash] = useState(false);
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const format = useCameraFormat(device, Templates.Instagram);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  function toggleFlash() {
    setFlash(prevState => !prevState);
  }
  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
          />
        )}

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
    </PermissionManager>
  );
}
