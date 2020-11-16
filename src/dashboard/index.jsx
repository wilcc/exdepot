import React, { Component } from 'react'
import './dashboard.scss'
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from './Dashboard';
import Discover from '../pages/Discover';
import Categories from '../pages/Categories';
import Detail from '../pages/Detail';
import MyListing from '../pages/MyListing';
export default class index extends Component {
  render() {
    return (
      <Dashboard>
        {/*<Discover /> */}
        <Categories />
        {/* <Detail /> */}
        {/* <MyListing /> */}

      </Dashboard>
      
    )
  }
}
