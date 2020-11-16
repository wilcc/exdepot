import React, { Component } from 'react'
<<<<<<< HEAD
// import './dashboard.scss'
import SideNav from './SideNav'
import TopNav from './TopNav'
import GlobalNav from './GlobalNav'
export default class index extends Component {
  render() {
    return (
      <div>
     <GlobalNav /> 
    {/*<TopNav /> */}
        </div>
=======
import './dashboard.scss'
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from './Dashboard'
import Discover from '../pages/Discover'
import Detail from '../pages/Detail'
import MyListing from '../pages/MyListing'
export default class index extends Component {
  render() {
    return (
      <Dashboard>
        <Discover />
       {/*  <Detail /> */}
        {/* <MyListing /> */}

      </Dashboard>
>>>>>>> main
      
    )
  }
}

// backup original code 

// <div className="top-nav">
// </div>
// <div className="content-section">
//   <div className="side-nav">
//   </div>
//   <div className="content-pane">
//   content-pane this is where all info goes
//   </div>
// </div>

