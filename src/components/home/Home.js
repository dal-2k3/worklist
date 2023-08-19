import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
} from "semantic-ui-react";

class Home extends Component {
  state = {
    date: "",
    open: false,
  };
  handleWorkDateChange = (event, { name, value }) => {
    console.log(value);
  };
  render() {
    return (
      <Grid stretched style={{ background: "#eee" }} stackable>
        <Grid.Column width={4}>
          <Segment className="ui orange segment">
            <Header>
              <Icon className="tasks"></Icon>
              <Header.Content>WorkList</Header.Content>
            </Header>
            <Divider></Divider>
            <Menu vertical style={{ width: "100%" }}>
              <Menu.Item name="user">
                <Icon className="user circle"></Icon> User
              </Menu.Item>
              <Menu.Item name="key">
                <Icon className="key circle"></Icon> Change Password
              </Menu.Item>
              <Menu.Item name="signout">
                <Icon className="sign out alternate circle"></Icon> Sign Out
              </Menu.Item>
            </Menu>
            <Divider></Divider>
            <DateInput
              name="date "
              inline
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleWorkDateChange}
            ></DateInput>
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Grid>
            <Grid.Column width={16}>
              <Grid.Row>
                <Segment className="ui teal segment" clearing>
                  <Header>
                    <Icon name="calendar" color="red"></Icon>
                    <Header.Content>
                      <h1>Date: 04/08/2023</h1>
                    </Header.Content>
                  </Header>
                  <Button icon="plus" floated="right" color="teal"></Button>
                </Segment>
              </Grid.Row>
              <Divider></Divider>
              <Grid.Row>
                <Grid>
                  <Grid.Column width={8}>
                    <Segment className="ui pink segment" stacked>
                      <Header>
                        <Icon name="bell" color="yellow"></Icon>
                        <Header.Content>TO-DO</Header.Content>
                      </Header>
                      <Divider></Divider>
                      <Segment className="ui brown segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                      <Segment className="ui brown segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                      <Segment className="ui brown segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Segment className="ui orange segment" stacked>
                      <Header>
                        <Icon
                          name="calendar check outline"
                          color="orange"
                        ></Icon>
                        <Header.Content>DONE</Header.Content>
                      </Header>
                      <Divider></Divider>
                      <Segment className="ui teal segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                      <Segment className="ui teal segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                      <Segment className="ui teal segment" attached clearing>
                        Do Homework
                        <Button
                          icon="trash alternate"
                          inverted
                          color="red"
                          floated="right"
                          size="tiny"
                        ></Button>
                        <Button
                          icon="checkmark"
                          inverted
                          color="green"
                          floated="right"
                          size="tiny"
                        ></Button>
                      </Segment>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
