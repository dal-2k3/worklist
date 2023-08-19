import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class UserPane extends Component {
  render() {
    return (
      <Menu vertical style={{ width: "100%" }}>
        <Menu.Item name="user">
          <Icon className="user circle"></Icon> User
        </Menu.Item>
        <Menu.Item name="key">
          <Icon className="key circle"></Icon> Change Password
        </Menu.Item>
        <Menu.Item name="signout" onClick={this.props.onSignout}>
          <Icon className="sign out alternate circle"></Icon> Sign Out
        </Menu.Item>
      </Menu>
    );
  }
}

export default UserPane;
