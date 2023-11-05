import React from 'react';

import {fireEvent, render} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('does not show the comment link if it has no comment', () => {
    const {queryByText} = render(
      <PostBottom {...mockedPost} commentCount={0} />,
    );

    const commentLinkElement = queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('navigate to PostCommentScreen when pressing the comment link', () => {
    const {getByText} = render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
