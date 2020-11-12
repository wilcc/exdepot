import React, { Component } from 'react'
import './dashboard.scss'
export default class index extends Component {
  render() {
    return (
        <div className="dashboard">
          <div className="top-nav">
            Top Navigation
          </div>
          <div className="content-section">
            <div className="side-nav">
            side-nav
            </div>
            <div className="content-pane">
            content-pane this is where all info goes
            </div>
          </div>
        </div>
      
    )
  }
}
