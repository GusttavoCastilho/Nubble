import React from 'react';

import {render, screen} from 'test-utils';

import {theme} from '@theme';

import {ActivityIndicator} from '../ActivityIndicator';

describe('<ActivityIndicator />', () => {
  it('should be defined', () => {
    render(<ActivityIndicator />);

    const element = screen.getByTestId('activity-indicator');

    expect(element).toBeDefined();
    expect(element.props.color).toBe(theme.colors.primary);
  });

  it('should pass the color prop to the component', () => {
    render(<ActivityIndicator color="success" />);

    const element = screen.getByTestId('activity-indicator');

    expect(element.props.color).toBe(theme.colors.success);
  });
});
