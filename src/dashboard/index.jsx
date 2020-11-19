import React, { Component } from "react";
import "./dashboard.scss";
// import SideNav from './SideNav'
// import TopNav from './TopNav'
import Dashboard from "./Dashboard";
import Discover from "../pages/Discover";
import Categories from "../pages/Category";
import Detail from "../pages/Detail";
import MyListing from "../pages/MyListing";
import AcceptDecline from "../pages/AcceptDecline";
import AcceptDeclineModal from "../pages/AcceptDeclineModal";
import WatchList from "../pages/WatchList";
import CurrentBids from "../pages/CurrentBids/";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import ForgotPW from "../pages/ForgotPW";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
export default class index extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/discover">
            <Discover />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route> 

          <Route path="/mylisting">
            <MyListing />
          </Route>

          <Route path="/messages">
          
          </Route>
          <Route path="/watchlist">
            <WatchList />
          </Route>

          <Route path="/currbids">
            <CurrentBids />
          </Route>

          <Route path="/createnewlisting"></Route>
          <Route path="/login">
            <Login />
          </Route> 
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgotpw">
            <ForgotPW />
          </Route>
          <Route path="/profile"></Route> 
          <Route path="/help"></Route>
          <Route path="searchbar"></Route>
          <Route path="/">
            <Redirect to="/discover" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
