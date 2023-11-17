import React from 'react';

import {screen, render, fireEvent} from 'test-utils';

import {Icon} from '../Icon';

describe('<Icon /> ', () => {
  it('should render the Icon component', () => {
    render(<Icon name="chat" />);

    const icon = screen.getByTestId('chat');

    expect(icon).toBeTruthy();
  });

  it('should the call onPress function when the icon is pressed', () => {
    const mockedOnPress = jest.fn();

    render(<Icon name="chat" onPress={mockedOnPress} />);

    const icon = screen.getByTestId('chat');

    fireEvent.press(icon);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
