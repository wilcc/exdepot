import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categoryList: [],
    categoryPopularList: [],
  },
  reducers: {
    setCategoryList: (state, { payload }) => {
      state.categoryList = payload.categoryList
    },
    setCategoryPopularList: (state, { payload }) => {
      state.categoryPopularList = payload.categoryPopularList
    },
  }
})
export const { setCategoryList, setCategoryPopularList } = categorySlice.actions