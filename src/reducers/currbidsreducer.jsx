import { createSlice } from '@reduxjs/toolkit'

export const currBidsSlice = createSlice({
  name: 'currbids',
  initialState: {
    currBidsList: []
  },
  reducers: {
    setCurrBidsList: (state, { payload }) => {
      state.currBidsList = payload.currBidsList
    },
  }
})
export const { setCurrBidsList } = currBidsSlice.actions