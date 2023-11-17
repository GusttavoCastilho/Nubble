import React from 'react';

import {render, screen} from 'test-utils';

import {ProfileAvatar} from '../ProfileAvatar';

describe('<ProfileAvatar />', () => {
  it('should render an image with the given imageURL', () => {
    render(<ProfileAvatar imageURL="https://example.com/image.png" />);

    const image = screen.getByTestId('profile-avatar');

    expect(image.props.source.uri).toEqual('https://example.com/image.png');
  });

  it('should render an image with the given size', () => {
    render(
      <ProfileAvatar imageURL="https://example.com/image.png" size={64} />,
    );

    const image = screen.getByTestId('profile-avatar');

    expect(image.props.style).toMatchObject({width: 64, height: 64});
  });
});
