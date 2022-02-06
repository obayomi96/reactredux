import {
  USERS_REQUEST_PROCESS,
  USERS_REQUEST_SUCCESS,
  USERS_REQUEST_ERROR
} from '../actionTypes'

const DEFAULT_STATE = {
  isLoading: null,
  users: [],
  error: {},
};

export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case USERS_REQUEST_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload.users,
        error: {},
      };
    case USERS_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};
