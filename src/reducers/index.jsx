import { combineReducers } from 'redux'
import { authSlice } from './authreducer.jsx'
import { categorySlice } from './categoryreducer.jsx'

export default combineReducers({
  auth: authSlice.reducer,
  category: categorySlice.reducer,
})