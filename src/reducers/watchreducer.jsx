import { createSlice } from '@reduxjs/toolkit'

export const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    watchList: []
  },
  reducers: {
    setWatch: (state, { payload }) => {
      state.watchList = payload.watchList
    },
  }
})
export const { setWatch } = watchSlice.actions