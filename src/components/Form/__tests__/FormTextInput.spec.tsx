import React from 'react';

import {useForm} from 'react-hook-form';
import {render, renderHook, screen} from 'test-utils';

import {FormTextInput} from '../FormTextInput';

describe('<FormTextInput />', () => {
  it('should be defined', () => {
    const {result} = renderHook(() => useForm());

    render(
      <FormTextInput
        control={result.current.control}
        label="any label"
        name="name"
        placeholder="any placeholder"
      />,
    );

    const input = screen.getByPlaceholderText('any placeholder');

    expect(input).toBeDefined();
  });
});
