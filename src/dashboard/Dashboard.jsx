import React, { Component } from 'react';
import './dashboard.scss';
import SideNav from './SideNav';
import TopNav from './TopNav';
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="content-section">
          <div className="side-nav">
            <SideNav />
          </div>
          <div className="content-pane">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
