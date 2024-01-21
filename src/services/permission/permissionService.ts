import {Permission, PermissionsAndroid, Platform} from 'react-native';
import {
  PermissionName,
  PermissionService,
  PermissionStatus,
} from './permissionTypes';

async function checkPermission(
  permissionName: PermissionName,
): Promise<PermissionStatus> {
  const permission = mapNameToPermission(permissionName);

  if (permission) {
    const result = await PermissionsAndroid.check(permission);

    if (result) {
      return 'granted';
    }

    return 'denied';
  }

  return 'unavailable';
}

async function requestPermission(
  permissionName: PermissionName,
): Promise<PermissionStatus> {
  const permission = mapNameToPermission(permissionName);

  if (permission) {
    const result = await PermissionsAndroid.request(permission);

    return result;
  }

  return 'unavailable';
}

function mapNameToPermission(
  permissionName: PermissionName,
): Permission | null {
  switch (permissionName) {
    case 'photoLibrary':
      if (Number(Platform.Version) >= 33) {
        return 'android.permission.READ_MEDIA_IMAGES';
      } else {
        return 'android.permission.READ_EXTERNAL_STORAGE';
      }

    case 'camera':
      return 'android.permission.CAMERA';

    default:
      return null;
  }
}

export const permissionService: PermissionService = {
  checkPermission,
  requestPermission,
};
