import React, { Component } from "react";
import { Divider, Segment } from "semantic-ui-react";
import HeaderPane from "./HeaderPane";
import UserPane from "./UserPane";
import WorkDatePane from "./WorkDatePane";

class SidePane extends Component {
  render() {
    return (
      <Segment className="ui orange segment">
        <HeaderPane></HeaderPane>
        <Divider></Divider>
        <UserPane onSignout={this.props.onSignout}></UserPane>
        <Divider></Divider>
        <WorkDatePane></WorkDatePane>
      </Segment>
    );
  }
}

export default SidePane;
