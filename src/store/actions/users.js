import userService from '../../services/UserService';
import {
  USERS_REQUEST_PROCESS,
  USERS_REQUEST_SUCCESS,
  USERS_REQUEST_ERROR
} from '../actionTypes'

const {
  fetchUsers,
  addUser,
  editUser,
  deleteUser
} = userService;

export const getUsers = () => async dispatch => {
  try {
    dispatch({ type: USERS_REQUEST_PROCESS });
    const users = await fetchUsers();
    dispatch({ type: USERS_REQUEST_SUCCESS, payload: users });
  } catch (error) {
    if (error) {
      dispatch({ type: USERS_REQUEST_ERROR, payload: error });
    }
  }
};

export const createUser = (payload, usersList) => async dispatch => {
  try {
    dispatch({ type: USERS_REQUEST_PROCESS });
    const user = await addUser(payload);
    if(user) {
      usersList.unshift(payload, {id: user.id});
      dispatch({ type: USERS_REQUEST_SUCCESS, payload: { users: usersList } });
    }
  } catch (error) {
    if (error) {
      dispatch({ type: USERS_REQUEST_ERROR, payload: error });
    }
  }
};

export const updateUser = (
  user,
  usersList,
  userId,
) => async dispatch => {
  try {
    dispatch({ type: USERS_REQUEST_PROCESS });
    const editedUser = await editUser(userId, user);
    let userIndex;
    usersList.find((element, index) => {
      if (element.id === userId) {
        return userIndex = index;
      }
      return userIndex = index;
    });
    usersList.splice(userIndex, 1, editedUser);
    dispatch({ type: USERS_REQUEST_SUCCESS, payload: { users: usersList }});
    return editedUser;
  } catch (error) {
    if (error) {
      dispatch({ type: USERS_REQUEST_ERROR, payload: error });
    } 
  }
};

export const removeUser = (id, usersList) => async dispatch => {
  try {
    dispatch({ type: USERS_REQUEST_PROCESS });
    const newUsers = usersList.filter(
      user => user.id !== id,
    );
    await deleteUser(id);
    dispatch({ type: USERS_REQUEST_SUCCESS, payload: newUsers });
    } catch (error) {
      if (error) {
        dispatch({ type: USERS_REQUEST_ERROR, payload: error });
    }
  }
}
