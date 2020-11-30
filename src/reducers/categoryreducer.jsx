import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryList: []
  },
  reducers: {
    setCategoryList: (state, { payload }) => {
      state.categoryList = payload.categoryList
    },
  }
})
export const { setCategoryList } = categorySlice.actions