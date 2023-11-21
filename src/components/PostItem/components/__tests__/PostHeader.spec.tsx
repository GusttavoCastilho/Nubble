import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostHeader} from '../../../ProfileUser/ProfileUser';

import {mockedAuthor} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostHeader />', () => {
  it('should render the component', () => {
    render(<PostHeader author={mockedAuthor} />);

    const userName = screen.getByText(mockedAuthor.userName);

    expect(userName).toBeTruthy();
  });

  it('navigate to PostCommentScreen when pressing the comment link', () => {
    render(<PostHeader author={mockedAuthor} />);

    const userName = screen.getByText(mockedAuthor.userName);

    fireEvent.press(userName);

    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen', {
      userId: mockedAuthor.id,
    });
  });
});
