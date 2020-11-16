import React, { Component } from 'react'
import './dashboard.scss'
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from './Dashboard'
import Discover from '../pages/Discover'
import Detail from '../pages/Detail'
export default class index extends Component {
  render() {
    return (
      <Dashboard>
        {/* <Discover /> */}
        <Detail />
      </Dashboard>
      
    )
  }
}
