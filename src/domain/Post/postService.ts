import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';
import {ImageForUpload} from '@services';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}

async function createPost(text: string, image: ImageForUpload): Promise<Post> {
  const postAPI = await postApi.createPost(text, image);

  return postAdapter.toPost(postAPI);
}

export const postService = {
  getList,
  createPost,
};
