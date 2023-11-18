import React from 'react';

import {render, screen} from 'test-utils';

import {PostActions} from '../PostActions';

describe('<PostActions />', () => {
  it('should call the like Post button when it is pressed', () => {
    render(
      <PostActions commentCount={0} favoriteCount={0} reactionCount={0} />,
    );

    const likeButton = screen.getByTestId('like-button');

    expect(likeButton).toBeTruthy();
  });

  it('should render the comment count text when it is bigger than 0', () => {
    render(
      <PostActions commentCount={1} favoriteCount={0} reactionCount={0} />,
    );

    const commentCount = screen.getByText('1');

    expect(commentCount).toBeTruthy();
  });
});
