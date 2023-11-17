import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {theme} from '@theme';

import {TextMessage} from '../TextMessage';

describe('<TextMessage />', () => {
  it('should render a text message', () => {
    render(<TextMessage onPressSend={jest.fn()} />);

    const textMessage = screen.getByTestId('text-message');

    expect(textMessage).toBeDefined();
  });

  it('should be able the focus the input', () => {
    render(<TextMessage onPressSend={jest.fn()} />);

    const textMessage = screen.getByTestId('text-message');

    fireEvent(textMessage, 'pressIn');

    expect(textMessage).toBeDefined();
  });

  it('should the send button be disabled when the input is empty', () => {
    render(<TextMessage onPressSend={jest.fn()} />);

    const sendButton = screen.getByText('Enviar');

    expect(sendButton.props.style[0].color).toBe(theme.colors.gray2);
  });

  it('should call the onPressSend function when the send button is pressed', () => {
    const onPressSend = jest.fn();

    render(<TextMessage onPressSend={onPressSend} value="Hello World" />);

    const textMessage = screen.getByTestId('text-message');

    fireEvent(textMessage, 'pressIn');

    const sendButton = screen.getByText('Enviar');

    fireEvent(sendButton, 'press');

    expect(onPressSend).toHaveBeenCalled();
  });
});
