import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './dashboard.scss';

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.openLoggedInAvatar = React.createRef();
    this.state = {
      isAvatarOpen: false,
    };
  }

  render() {
    const userAvatar = {
      userName: 'Remy Sharp',
      avatarImage: 'https://randomuser.me/api/portraits/women/47.jpg',
    };

    return (
      <div className="nav-root">
        <AppBar>
          <Toolbar classes={{ root: 'toolbar-custom-for-top-nav' }}>
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
            >
              ExDepot
            </IconButton>
            <Typography variant="h6" className="title"></Typography>
            <div className="search">
              <SearchIcon />
              <InputBase placeholder="Search…" />
            </div>

            {/*<Button color="inherit">Login</Button> */}
            <div
              className="avatar"
              ref={this.openLoggedInAvatar}
              onClick={() => this.setState({ isAvatarOpen: true })}
            >
              <Avatar alt={userAvatar.userName} src={userAvatar.avatarImage} />
            </div>
            <Menu
              classes={{ paper: 'menu-avatar' }}
              id="simple-menu"
              anchorEl={this.openLoggedInAvatar}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={this.state.isAvatarOpen}
              onClose={() => this.setState({ isAvatarOpen: false })}
            >
              <MenuItem onClick={() => this.setState({ isAvatarOpen: false })}>
                Profile
              </MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
