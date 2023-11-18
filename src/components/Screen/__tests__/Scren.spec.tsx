import React from 'react';
import {Platform} from 'react-native';

import {screen, render} from 'test-utils';

import {Screen} from '../Screen';

describe('<Screen />', () => {
  it('should render the scroll view container when scrollable is true', () => {
    render(
      <Screen scrollable>
        <></>
      </Screen>,
    );

    const scrollView = screen.getByTestId('scroll-view-container');

    expect(scrollView).toBeTruthy();
  });

  it("should don't pass the behavior prop when platform is android", () => {
    jest.replaceProperty(Platform, 'OS', 'android');

    render(
      <Screen>
        <></>
      </Screen>,
    );

    const viewContainer = screen.getByTestId('view-container');

    expect(viewContainer.props.behavior).toBeUndefined();
  });
});
