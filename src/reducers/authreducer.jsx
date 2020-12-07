import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userID: null,
    userName: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload.token
      state.userID = payload.userID
      state.userName = payload.userName
    },
    logout: (state, { payload }) => {
      state.token = null
      state.userID = null
      state.userName = null
    },
  }
})
export const { setToken, logout } = authSlice.actions