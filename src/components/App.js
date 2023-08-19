import "./App.css";

import React, { Component } from "react";
import { Divider, Grid } from "semantic-ui-react";
import SidePane from "./SidePane/SidePane";
import firebase from "../firebase";
import { connect } from "react-redux";
import { clearUser, setUser } from "../redux/users/userAction";
import TopHeaderPane from "./TopPane/TopHeaderPane";
import ContentPane from "./ContentPane/ContentPane";
import EmptyContentMessage from "./ContentPane/EmptyContentMessage";

class App extends Component {
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.clearUser();
      });
  };

  render() {
    const { workDate, workDateData, refreshWorkDateDataId } = this.props;
    return (
      <Grid stretched style={{ background: "#eee" }} stackable>
        <Grid.Column width={4}>
          <SidePane onSignout={this.handleSignout}></SidePane>
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid.Column>
            <Grid.Column width={16}>
              <Grid.Row>
                <TopHeaderPane></TopHeaderPane>
              </Grid.Row>
              <Divider></Divider>
              <Grid.Row>
                {this.props.workDateData ? (
                  <ContentPane
                    key={`${workDateData.id}${refreshWorkDateDataId}`}
                    workDateId={workDateData.id}
                    workDate={workDate}
                  ></ContentPane>
                ) : (
                  <EmptyContentMessage
                    key={workDate}
                    workDate={this.props.workDate}
                  ></EmptyContentMessage>
                )}
              </Grid.Row>
            </Grid.Column>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({
  users: { loading },
  workDates: { workDate, workDateData, refreshWorkDateDataId },
}) => ({
  workDate: workDate,
  workDateData: workDateData,
  refreshWorkDateDataId,
});
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
