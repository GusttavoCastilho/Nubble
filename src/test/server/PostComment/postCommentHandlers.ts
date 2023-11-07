import {BASE_URL, PageAPI} from '@api';
import {POST_COMMENT_PATH, PostCommentAPI} from '@domain';
import {http, HttpResponse} from 'msw';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}/${POST_COMMENT_PATH}`;

let inMemoryResponse = {...mockedData.mockedPostCommentResponse};

export const postCommentHandlers = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<PostCommentAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostComment: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      inMemoryResponse.data = [...inMemoryResponse.data, newPostComment];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostComment, {status: 201});
    },
  ),
];
