import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../reducers/authreducer";
import "./dashboard.scss";

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout,
    },
    dispatch
  );

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.openLoggedInAvatar = React.createRef();
    this.state = {
      isAvatarOpen: false,
    };
  }
  
  render() {
    const userAvatar = {
      userName: "Remy Sharp",
      avatarImage: "https://randomuser.me/api/portraits/women/47.jpg",
    };

    return (
      <div className="nav-root">
        <AppBar>
          <Toolbar classes={{ root: "toolbar-custom-for-top-nav" }}>
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
            {this.props.token ? 
              <div
                className="avatar"
                ref={this.openLoggedInAvatar}
                onClick={() => this.setState({ isAvatarOpen: true })}
              >
                <Avatar
                  alt={userAvatar.userName}
                  src={userAvatar.avatarImage}
                />
              </div>
              : 
              <Fragment>
                <NavLink to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
                |
                <NavLink to="/register">
                  <Button color="inherit">Register</Button>
                </NavLink>
              </Fragment>
            }

            <Menu
              classes={{ paper: "menu-avatar" }}
              id="simple-menu"
              anchorEl={this.openLoggedInAvatar}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={this.state.isAvatarOpen}
              onClose={() => this.setState({ isAvatarOpen: false })}
            >
              <MenuItem onClick={() => this.setState({ isAvatarOpen: false })}>
                Profile
              </MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem
                onClick={() => {
                  console.log("logout");
                  this.props.logout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
