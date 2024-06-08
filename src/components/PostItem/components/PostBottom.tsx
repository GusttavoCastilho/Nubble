import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'> & {
  hideCommentAction?: boolean;
};

export function PostBottom({
  author,
  text,
  commentCount,
  id,
  hideCommentAction,
}: Props) {
  const navigation = useNavigation();
  const commentText = hideCommentAction ? null : getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigation.navigate('PostCommentScreen', {
      postId: id,
      postAuthorId: author.id,
    });
  }

  return (
    <Box mt="s16" testID="post-bottom">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" semiBold>
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToPostCommentScreen}
          preset="paragraphSmall"
          bold
          color="primary"
          mt="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
