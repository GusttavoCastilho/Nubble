export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'never_ask_again'
  | 'unavailable';

export type PermissionName = 'photoLibrary' | 'camera';

export type PermissionService = {
  checkPermission: (permission: PermissionName) => Promise<PermissionStatus>;
  requestPermission: (permission: PermissionName) => Promise<PermissionStatus>;
};
