import React, {useRef, useState} from 'react';

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
  const [isReady, setIsReady] = useState(false);
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const camera = useRef<Camera>(null);

  const format = useCameraFormat(device, Templates.Instagram);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active';

  async function takePhoto() {
    if (camera.current == null) return;

    const photoFile = await camera.current?.takePhoto({
      flash: flash ? 'on' : 'off',
      qualityPrioritization: 'quality',
    });

    navigation.navigate('PublishPostScreen', {
      imageUri: `file://${photoFile?.path}`,
    });
  }

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
            ref={camera}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            photo={true}
            onInitialized={() => setIsReady(true)}
            enableHighQualityPhotos={true}
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
            {isReady && (
              <Icon name="cameraClick" color="grayWhite" onPress={takePhoto} />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
