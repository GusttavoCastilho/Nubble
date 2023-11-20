import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(userId: number): Promise<User> {
  const userAPI = await userApi.getById(userId.toString());

  return userAdapter.toUser(userAPI);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userAPIPage = await userApi.getList(search);

  return apiAdapter.toPageModel(userAPIPage, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
