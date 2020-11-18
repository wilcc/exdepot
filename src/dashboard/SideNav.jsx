import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import MessageIcon from '@material-ui/icons/Message';
import StarsIcon from '@material-ui/icons/Stars';
import GavelIcon from '@material-ui/icons/Gavel';
import Collapse from '@material-ui/core/Collapse';
import CategoryIcon from '@material-ui/icons/Category';
import './dashboard.scss';
import { NavLink } from 'react-router-dom';
class SidenavListitem extends Component {
  render() {
    const { link } = this.props;

    return (
      <div>
        <NavLink to={ link ? link : "/"}>
          <ListItem button>
            <ListItemIcon>{this.props.icon}</ListItemIcon>
            <ListItemText primary={this.props.textLabel} />
          </ListItem>
        </NavLink>
        {this.props.children}
      </div>
    );
  }
}

export default class SideNav extends Component {
  render() {
    return (
      <List>
      
        <SidenavListitem icon={<SearchIcon />} textLabel="Discover" link="/discover">
          <div className="wrapper-for-children-sublist">
            <SidenavListitem icon={<CategoryIcon />} textLabel="Categories" />
          </div>
        </SidenavListitem>

        <SidenavListitem icon={<ListIcon />} textLabel="My Listing" />
        <SidenavListitem icon={<MessageIcon />} textLabel="Message" />
        <SidenavListitem icon={<StarsIcon />} textLabel="My WatchList"  link="/watchlist" />
        <SidenavListitem icon={<GavelIcon />} textLabel="Current Bids" />
        <Divider />
        <Button
          classes={{ root: 'create-btn' }}
          variant="contained"
          color="primary"
        >
          Create New Listing
        </Button>
      </List>
    );
  }
}
