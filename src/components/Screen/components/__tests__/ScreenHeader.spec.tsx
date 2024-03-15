import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {ScreenHeader} from '../ScreenHeader';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedNavigate,
    }),
  };
});

describe('<ScreenHeader />', () => {
  it('should render the correctly components', () => {
    render(<ScreenHeader title="Test" />);

    const title = screen.getByText('Test');

    expect(title).toBeTruthy();
  });

  it('should call goBack function when press back button', () => {
    render(<ScreenHeader canGoBack title="Test" />);

    const backButton = screen.getByTestId('back-button');

    fireEvent.press(backButton);

    expect(mockedNavigate).toHaveBeenCalled();
  });

  it('should render the text "Voltar" when title is not passed', () => {
    render(<ScreenHeader canGoBack />);

    const backButton = screen.getByText('Voltar');

    expect(backButton).toBeTruthy();
  });
});
