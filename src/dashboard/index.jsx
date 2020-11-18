import React, { Component } from 'react';
import './dashboard.scss';
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from './Dashboard';
import Discover from '../pages/Discover';
import Categories from '../pages/Category';
import Detail from '../pages/Detail';
import MyListing from '../pages/MyListing';
import AcceptDecline from '../pages/AcceptDecline';
import AcceptDeclineModal from '../pages/AcceptDeclineModal';
import WatchList from '../pages/WatchList';
import MakeOffer from '../pages/MakeOffer'
export default class index extends Component {
  render() {
    return (
      <Dashboard>
        {/* <Discover /> */}
        {/* <Detail /> */}
        {/* <MyListing /> */}
        {/* <Categories /> */}
        {/* <AcceptDecline /> */}
        {/* <AcceptDeclineModal /> */}
        {/* <WatchList /> */}
        <MakeOffer />
      </Dashboard>
    );
  }
}
