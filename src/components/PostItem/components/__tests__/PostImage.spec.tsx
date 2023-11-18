import React from 'react';

import {render, screen} from 'test-utils';

import {PostImage} from '../PostImage';

describe('<PostImage />', () => {
  it('should render the image', () => {
    render(<PostImage imageURL="https://picsum.photos/200/300" />);

    const image = screen.getByTestId('post-image');

    expect(image.props.source.uri).toEqual('https://picsum.photos/200/300');
  });
});
