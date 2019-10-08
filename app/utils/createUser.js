import Api from './api';

export default async function createUser(fullName, email) {
  try {
    const response = await Api.addUserToDatabase(fullName, email);

    return response;
  } catch (e) {
    return Promise.reject(e);
  }
}
