import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {
  Box,
  PressableBox,
  PressableBoxProps,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@components';

type ProfileUserProps = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent,
  ...props
}: ProfileUserProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {userId: user.id});
  }
  return (
    <PressableBox
      onPress={handleOnPress}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="s16"
      {...props}>
      <Box flexDirection="row" alignItems="center">
        <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
