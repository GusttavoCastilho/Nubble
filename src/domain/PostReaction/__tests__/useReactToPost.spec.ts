import {act, renderHook, waitFor} from 'test-utils';
import {useReactToPost} from '../useCases/useReactToPost';
import {
  postWithLike,
  postWithoutLike,
  postWithoutLikeResponse,
} from './mockedData/mockedPost';
import {postReactionService} from '../postReactionService';

describe('useReactToPost', () => {
  it('when react to post, hasReacted and reactionCount should be updated', async () => {
    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockResolvedValueOnce(postWithoutLikeResponse);

    const {result} = renderHook(() =>
      useReactToPost({
        post: postWithoutLike,
        postReactionType: 'like',
      }),
    );

    expect(result.current.hasReacted).toBe(false);
    expect(result.current.reactionCount).toBe(postWithoutLike.reactionCount);

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => {
      expect(result.current.hasReacted).toBe(true);
    });

    await waitFor(() => {
      expect(result.current.reactionCount).toBe(
        postWithoutLike.reactionCount + 1,
      );
    });
  });

  it('when react to post fails, hasReacted and reactionCount should be reverted to the original values', async () => {
    const errorMessage = 'Failed to react to post';

    jest
      .spyOn(postReactionService, 'reactToPost')
      .mockRejectedValueOnce(new Error(errorMessage));

    const mokedOnError = jest.fn();

    const {result} = renderHook(() =>
      useReactToPost({
        post: postWithLike,
        postReactionType: 'like',
        options: {onError: mokedOnError},
      }),
    );

    expect(result.current.hasReacted).toBe(true);
    expect(result.current.reactionCount).toBe(postWithLike.reactionCount);

    act(() => {
      result.current.reactToPost();
    });

    await waitFor(() => {
      expect(result.current.hasReacted).toBe(false);
    });

    await waitFor(() => {
      expect(result.current.reactionCount).toBe(postWithLike.reactionCount);
    });
  });
});
