import React from 'react';

import {render, screen} from 'test-utils';

import {Box} from '../Box';

describe('<Box />', () => {
  it('should be defined', () => {
    render(<Box testID="box-component" />);

    const element = screen.getByTestId('box-component');

    expect(element).toBeDefined();
  });
});
