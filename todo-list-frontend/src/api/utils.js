import axios from 'axios';

const API_URL = 'http://localhost:5000';

//AUTH

export const registerFetch = async (user) => {
  return await axios
    .post(`${API_URL}/users/register`, user)
    .catch((response) => response.response.data.msg);
};

export const loginFetch = async (user) => {
  return await axios
    .post(`${API_URL}/users/login`, user)
    .catch((response) => response.response.data.msg);
};

export const authFirebaseFetch = async (user) => {
  return await axios
    .post(`${API_URL}/users/authFirebase`, user)
    .catch((response) => response.response.data.msg);
};

//USER

export const editUsernameFetch = async (data) => {
  return await axios.post(`${API_URL}/users/username`, data);
};

export const editImgFetch = async (data) => {
  return await axios.post(`${API_URL}/users/image`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

//TODOS

export const addTodoFetch = async (todo, userId) => {
  return await axios.post(`${API_URL}/todos/add`, {
    todo,
    userId
  });
};

export const editTodoFetch = async (todo) => {
  return await axios.post(`${API_URL}/todos/edit`, todo);
};

export const deleteTodoFetch = async (todoId, userId) => {
  return await axios.post(`${API_URL}/todos/delete`, {
    todoId,
    userId
  });
};
