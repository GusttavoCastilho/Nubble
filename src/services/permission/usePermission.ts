import {useEffect, useState} from 'react';
import {PermissionName, PermissionStatus} from './permissionTypes';
import {permissionService} from './permissionService';

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

  async function checkPermission() {
    try {
      const initialStatus = await permissionService.checkPermission(
        permissionName,
      );

      if (initialStatus === 'denied') {
        const requestStatus = await permissionService.requestPermission(
          permissionName,
        );
        setPermissionStatus(requestStatus);
      } else {
        setPermissionStatus(initialStatus);
      }
    } catch (err) {
      setPermissionStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkPermission();
  }, []);

  return {
    status: permissionStatus,
    isLoading,
  };
}
