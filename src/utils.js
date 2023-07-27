export const getErrorMessage = (error, key = '') => {
  return error.response ? error.response.data.message : error;
}
