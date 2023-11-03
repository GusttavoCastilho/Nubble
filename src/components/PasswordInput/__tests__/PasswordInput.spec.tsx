import React from 'react';

import {fireEvent, render} from 'test-utils';

import {IconProps, PasswordInput} from '@components';

describe('<PasswordInput />', () => {
  it('should render correctly', () => {
    const mockedOnChangeText = jest.fn();

    const {getByPlaceholderText} = render(
      <PasswordInput
        label="any label"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChangeText}
      />,
    );

    const inputElement = getByPlaceholderText('password');

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('when pressing the eye icon, it should show the password, and change to the eyeOff icon', () => {
    const mockedOnChange = jest.fn();
    const {getByTestId, getByPlaceholderText} = render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = getByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
