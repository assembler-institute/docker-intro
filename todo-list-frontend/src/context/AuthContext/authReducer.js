import { types } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.AUTH:
      return {
        ...state,
        user: action.payload.user,
        todos: action.payload.todos,
      };
    case types.LOGOUT:
      return action.payload;
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.EDIT_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case types.EDIT_USERNAME:
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    case types.EDIT_IMG:
      return {
        ...state,
        user: { ...state.user, img: action.payload },
      };
    default:
      return state;
  }
};
