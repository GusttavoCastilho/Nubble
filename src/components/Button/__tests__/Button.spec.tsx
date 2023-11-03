import React from 'react';
import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';
import {render, fireEvent} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props?: Partial<ButtonProps>) {
  return render(<Button title="any title" {...props} />);
}

describe('<Button />', () => {
  it('calls the onPress when it is pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = renderComponent({onPress: mockedOnPress});

    fireEvent.press(getByText(/any title/i));

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call the onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(getByText(/any title/i));

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('the title should be gray if button is disabled', () => {
    const {getByText} = renderComponent({disabled: true});

    const titleElement = getByText(/any title/i);

    const titleStyle = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  it('show activity indicator when loading is true', () => {
    const {queryByTestId, queryByText} = renderComponent({loading: true});

    const loadingElement = queryByTestId('loading-button');
    const titleElement = queryByText(/any title/i);

    expect(loadingElement).toBeTruthy();
    expect(titleElement).toBeFalsy();
  });

  it('should disabled onPress function', () => {
    const mockedOnPress = jest.fn();

    const {queryByTestId} = renderComponent({
      loading: true,
      onPress: mockedOnPress,
    });

    const buttonElement = queryByTestId('button');

    fireEvent.press(buttonElement as ReactTestInstance);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
