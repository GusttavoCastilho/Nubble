import React from 'react';

import {screen, render} from 'test-utils';

import {mockedPost} from '../components/__tests__/mockedData/mockedPost';
import {PostItem} from '../PostItem';

describe('<PostItem />', () => {
  it('should render the correctly components', () => {
    render(<PostItem post={mockedPost} />);

    const postHeader = screen.getAllByText(mockedPost.author.userName);
    const postImage = screen.getByTestId('post-image');
    const postActions = screen.getByTestId('like-button');
    const postBottom = screen.getByTestId('post-bottom');

    expect(postHeader).toBeTruthy();
    expect(postImage).toBeTruthy();
    expect(postActions).toBeTruthy();
    expect(postBottom).toBeTruthy();
  });
});
