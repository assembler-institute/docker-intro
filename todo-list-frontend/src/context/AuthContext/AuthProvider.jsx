import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import {
  loginFetch,
  authFirebaseFetch,
  registerFetch,
  addTodoFetch,
  editTodoFetch,
  deleteTodoFetch,
  editUsernameFetch,
  editImgFetch,
} from "../../api/utils";
import Swal from "sweetalert2";

const initialState = {
  user: null,
  todos: null,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const register = async (newUser) => {
    const res = await registerFetch(newUser);
    if (res.data?.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    } else {
      Swal.fire({
        title: `${res}`,
        icon: "warning",
        iconColor: "#BB84E8",
        color: "#373a40",
        confirmButtonColor: "#BB84E8",
      });
    }
  };

  const login = async (user) => {
    const res = await loginFetch(user);
    if (res.data?.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    } else {
      Swal.fire({
        title: `${res}`,
        icon: "warning",
        iconColor: "#BB84E8",
        color: "#373a40",
        confirmButtonColor: "#BB84E8",
      });
    }
  };

  const authFirebase = async (user) => {
    const res = await authFirebaseFetch(user);
    if (res.data?.ok) {
      dispatch({
        type: types.AUTH,
        payload: { user: res.data.user, todos: res.data.todos },
      });
    } else {
      Swal.fire({
        title: `${res}`,
        icon: "warning",
        iconColor: "#BB84E8",
        color: "#373a40",
        confirmButtonColor: "#BB84E8",
      });
    }
  };

  const logout = () => {
    dispatch({ type: types.LOGOUT, payload: initialState });
  };

  const addTodo = async (newTodo) => {
    const res = await addTodoFetch(newTodo, authState.user.userId);
    if (res.data.ok) {
      dispatch({
        type: types.ADD_TODO,
        payload: res.data.todo,
      });
    }
  };

  const editTodo = async (editedTodo) => {
    const res = await editTodoFetch(editedTodo);
    if (res.data.ok) {
      const newArrTodos = authState.todos.map((todo) =>
        todo._id === editedTodo._id ? editedTodo : todo
      );
      dispatch({
        type: types.EDIT_TODO,
        payload: newArrTodos,
      });
    }
  };

  const deleteTodo = async (todoId) => {
    const res = await deleteTodoFetch(todoId, authState.user.userId);
    if (res.data.ok) {
      const newArrTodos = authState.todos.filter((todo) => todo._id !== todoId);
      dispatch({
        type: types.DELETE_TODO,
        payload: newArrTodos,
      });
    }
  };

  const editUsername = async (username) => {
    const res = await editUsernameFetch({
      username,
      userId: authState.user.userId,
    });
    if (res.data.ok) {
      dispatch({ type: types.EDIT_USERNAME, payload: username });
    }
  };

  const editImage = async (img) => {
    const res = await editImgFetch(img);
    if (res.data.ok) {
      dispatch({ type: types.EDIT_IMG, payload: res.data.img });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        register,
        login,
        authFirebase,
        logout,
        addTodo,
        editTodo,
        deleteTodo,
        editUsername,
        editImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
