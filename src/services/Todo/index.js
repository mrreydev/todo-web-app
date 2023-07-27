import { apiClient } from "../axiosConfig";

export const getTodos = (payload) => {
  return apiClient({
    method: 'get',
    url: '/todos',
    ...payload
  }).then(response => response.data)
}

export const getTodo = (payload) => {
  return apiClient({
    method: 'get',
    url: `/todos/${payload.id}`,
    ...payload
  }).then(response => response.data)
}

export const createTodo = (payload) => {
  return apiClient({
    method: 'post',
    url: '/todos',
    ...payload
  }).then(response => response.data)
}

export const updateTodo = (payload) => {
  return apiClient({
    method: 'put',
    url: `/todos/${payload.id}`,
    ...payload
  }).then(response => response.data)
}

export const deleteTodo = (payload) => {
  return apiClient({
    method: 'delete',
    url: `/todos/${payload.id}`,
    ...payload
  }).then(response => response.data)
}
