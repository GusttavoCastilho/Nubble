import {PageAPI, PageParams} from '@api';

import {api} from '../../api/apiConfig';

import {PostAPI} from './postTypes';
import {ImageForUpload} from '@services';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('/user/post', {params});
  return response.data;
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<PostAPI> {
  const formData = new FormData();
  formData.append('text', text);
  formData.append('imageCover', imageCover);

  const response = await api.post<PostAPI>('/user/post', formData);
  return response.data;
}

export const postApi = {
  getList,
  createPost,
};
