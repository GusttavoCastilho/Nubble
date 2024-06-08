import {Post} from '@domain';

export const mockedAuthor = {
  id: 2,
  name: 'Maria Julia',
  profileURL: 'https://example.com',
  userName: 'mariajulia',
};

export const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 8,
  text: 'this is the text (post description)',
  author: mockedAuthor,
  reactions: [],
};
