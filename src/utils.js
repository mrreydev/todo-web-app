export const getErrorMessage = (error, key = '') => {
  return error.response ? error.response.data.message : error;
}

export const formatYMD = (date, separator = '-') => {
  if (date instanceof Date && !isNaN(date)) {
    return new Date(date)
      .toISOString()
      .slice(0, 10)
      .split('-')
      .join(separator)
  } else {
    return (
      date.substr(6, 4) +
      separator +
      date.substr(3, 2) +
      separator +
      date.substr(0, 2)
    )
  }
}
