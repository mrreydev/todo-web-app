import { apiClient } from "../axiosConfig";

export const login = (payload) => {
  return apiClient({
    method: 'post',
    url: '/auth/login',
    ...payload
  }).then(response => response.data)
}

export const register = (payload) => {
  return apiClient({
    method: 'post',
    url: '/auth/register',
    ...payload
  }).then(response => response.data)
}

export const getLoggedInUser = (payload) => {
  return apiClient({
    method: 'get',
    url: '/auth/users',
    ...payload
  }).then(response => response.data)
}
