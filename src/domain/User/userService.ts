import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(userId: number): Promise<User> {
  const userAPI = await userApi.getById(userId.toString());

  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
