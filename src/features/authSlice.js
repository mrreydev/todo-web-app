import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedInUser: {}
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      if (localStorage.getItem('userInfo')) {
        state.loggedInUser = JSON.parse(localStorage.getItem('userInfo'));
      }
    },
    resetLoggedInUser: state => {
      state.loggedInUser = {};
    }
  }
});

export const { setLoggedInUser, resetLoggedInUser } = authSlice.actions;

export default authSlice.reducer;
