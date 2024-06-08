import {Post, PostReactionBase} from '@domain';

export const mockedAuthor = {
  id: 2,
  name: 'Maria Julia',
  profileURL: 'https://example.com',
  userName: 'mariajulia',
};

export const postWithoutLike: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 8,
  text: 'this is the text (post description)',
  author: mockedAuthor,
  reactions: [],
};

export const postWithoutLikeResponse: PostReactionBase = {
  id: 1,
  emojiType: 'like',
  postId: postWithoutLike.id,
  userId: 1,
  createdAt: '2021-09-01T00:00:00Z',
  updatedAt: '2021-09-01T00:00:00Z',
  isChecked: true,
};

export const postWithLike: Post = {
  ...postWithoutLike,
  reactions: [{emojiType: 'like', postId: postWithoutLike.id}],
};

export const postWithLikeResponse: PostReactionBase = {
  ...postWithoutLikeResponse,
  isChecked: false,
};
