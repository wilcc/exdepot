import React, { Component } from 'react'
import MainDashboard from './dashboard/index'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'


const store = createStore(
  // persistedReducer,
  rootReducer,
  applyMiddleware(logger, thunk)
)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <MainDashboard />

      </Provider>
      
    )
  }
}

