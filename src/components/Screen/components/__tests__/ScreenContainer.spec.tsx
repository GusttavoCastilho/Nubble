import React from 'react';

import {render, screen} from 'test-utils';

import {ScrollViewContainer, ViewContainer} from '../ScreenContainer';

describe('<ScrollViewContainer />', () => {
  it('should render the correctly components', () => {
    render(
      <ScrollViewContainer backgroundColor="red">
        <></>
      </ScrollViewContainer>,
    );

    const scrollView = screen.getByTestId('scroll-view-container');

    expect(scrollView).toBeTruthy();
  });
});

describe('<ViewContainer />', () => {
  it('should render the correctly components', () => {
    render(
      <ViewContainer backgroundColor="red">
        <></>
      </ViewContainer>,
    );

    const view = screen.getByTestId('view-container');

    expect(view).toBeTruthy();
  });
});
