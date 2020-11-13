import React, { Component } from 'react'
import './dashboard.scss'
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from './Dashboard'
import Discover from '../pages/Discover'
export default class index extends Component {
  render() {
    return (
      <Dashboard>
        <Discover />
      </Dashboard>
      
    )
  }
}
