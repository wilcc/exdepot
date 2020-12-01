import { createSlice } from '@reduxjs/toolkit'

export const listingSlice = createSlice({
  name: 'listing',
  initialState: {
    listingList: []
  },
  reducers: {
    setListing: (state, { payload }) => {
      state.listingList = payload.listingList
    },
  }
})
export const { setListing } = listingSlice.actions