import { combineReducers } from 'redux'
import { authSlice } from './authreducer.jsx'

export default combineReducers({
  auth: authSlice.reducer,

})