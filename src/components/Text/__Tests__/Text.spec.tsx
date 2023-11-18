import React from 'react';

import {screen, render} from 'test-utils';

import {Text} from '../Text';

describe('<Text />', () => {
  it('should render Text', () => {
    render(<Text>any text</Text>);

    const text = screen.getByText('any text');

    expect(text).toBeTruthy();
  });

  it('should render the headingLarge preset when preset is passed', () => {
    render(<Text preset="headingLarge">any text</Text>);

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontSize: 32,
      lineHeight: 38.4,
    });
  });

  it('should render the bold font when bold is passed', () => {
    render(<Text bold>any text</Text>);

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-Bold',
    });
  });

  it('should render the italic font when italic is passed', () => {
    render(<Text italic>any text</Text>);

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-Italic',
    });
  });

  it('should render the semiBold font when semiBold is passed', () => {
    render(<Text semiBold>any text</Text>);

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-Medium',
    });
  });

  it('should render the boldItalic font when bold and italic are passed', () => {
    render(
      <Text bold italic>
        any text
      </Text>,
    );

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-BoldItalic',
    });
  });

  it('should render the mediumItalic font when semiBold and italic are passed', () => {
    render(
      <Text semiBold italic>
        any text
      </Text>,
    );

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-MediumItalic',
    });
  });

  it('should render the boldItalic font when preset is headingLarge and italic is passed', () => {
    render(
      <Text preset="headingLarge" italic>
        any text
      </Text>,
    );

    const text = screen.getByText('any text');

    expect(text.props.style[1]).toContainEqual({
      fontFamily: 'Satoshi-BoldItalic',
    });
  });
});
