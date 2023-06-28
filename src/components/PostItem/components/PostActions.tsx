import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {}

  function navigateToComments() {}

  function favoritePost() {}
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
