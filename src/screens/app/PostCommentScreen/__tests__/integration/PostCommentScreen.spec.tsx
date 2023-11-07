import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  it('when ADDING a comment the list is automatically updated', async () => {
    const {findByText, getByPlaceholderText, getByText, findAllByTestId} =
      renderScreen(
        <PostCommentScreen
          navigation={{} as any}
          route={{
            name: 'PostCommentScreen',
            key: 'PostCommentScreen',
            params: {
              postId: 1,
              postAuthorId: 1,
            },
          }}
        />,
      );

    const comment = await findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    const inputText = getByPlaceholderText(/Adicione um comentário/i);

    fireEvent.changeText(inputText, 'Novo comentário');

    fireEvent.press(getByText(/enviar/i));

    const newComment = await findByText(/novo comentário/i);

    expect(newComment).toBeTruthy();

    const comments = await findAllByTestId('post-comment-id');

    expect(comments).toHaveLength(2);
  });
});
