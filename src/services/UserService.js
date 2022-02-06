import Api from '../utils/api';

const fetchUsers = async () => {
  try {
    const response = await Api.get('/data');
    return response?.data;
  } catch (e) {
    throw new Error(e);
  }
};

const addUser = async (payload) => {
  try {
    const response = await Api.post('/data', payload);
    return response?.data;
  } catch (e) {
    throw new Error(e);
  }
};

const editUser = async (payload, id) => {
  try {
    const response = await Api.put(`/data${id}`, payload);
    return response?.data;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await Api.delete(`/data${id}`);
    return response?.data;
  } catch (e) {
    throw new Error(e);
  }
};

const userService = {
  fetchUsers,
  addUser,
  editUser,
  deleteUser
};

export default userService ;
