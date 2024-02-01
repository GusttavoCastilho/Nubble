import {PermissionName, usePermission} from '@services';
import React from 'react';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';
import {Button} from '../Button/Button';
import {Linking, Platform} from 'react-native';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Box} from '../Box/Box';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}
      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
              bold
              marginVertical="s16"
              textAlign="center">
              É necessário abrir e fechar o App novamente após alterar as
              configurações
            </Text>
          )}
          <Button
            title="Abrir Configurações"
            onPress={Linking.openSettings}
            mt="s16"
          />
        </Box>
      )}
    </Screen>
  );
}
