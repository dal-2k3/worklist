import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
class HeaderPane extends Component {
  render() {
    return (
      <Header>
        <Icon className="tasks"></Icon>
        <Header.Content>WorkList</Header.Content>
      </Header>
    );
  }
}

export default HeaderPane;
