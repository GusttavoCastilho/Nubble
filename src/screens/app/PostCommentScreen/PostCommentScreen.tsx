import React from 'react';

import {usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;
  const {} = usePostCommentList(postId);
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela</Text>
      </Box>
    </Screen>
  );
}
