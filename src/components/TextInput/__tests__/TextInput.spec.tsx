import React from 'react';
import {Text} from 'react-native';

import {fireEvent, render, screen} from 'test-utils';

import {TextInput} from '../TextInput';

describe('<TextInput />', () => {
  it('should render TextInput', () => {
    render(<TextInput label="any label" />);

    const textInput = screen.getByText('any label');

    expect(textInput).toBeTruthy();
  });

  it('should render the error message when errorMessage is passed', () => {
    render(<TextInput label="any label" errorMessage="any error message" />);

    const errorMessage = screen.getByText('any error message');

    expect(errorMessage).toBeTruthy();
  });

  it('should render the RightComponent when it is passed', () => {
    render(
      <TextInput
        label="any label"
        RightComponent={<Text>any right component</Text>}
      />,
    );

    const rightComponent = screen.getByText('any right component');

    expect(rightComponent).toBeTruthy();
  });

  it('should call focusInput when the TextInput is pressed', () => {
    render(<TextInput label="any label" />);

    const textInput = screen.getByText('any label');

    fireEvent.press(textInput);

    expect(textInput).toBeTruthy();
  });
});
