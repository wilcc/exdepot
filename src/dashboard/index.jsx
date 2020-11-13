import React, { Component } from 'react'
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

