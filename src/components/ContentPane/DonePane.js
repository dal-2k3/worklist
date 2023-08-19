import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Divider, Header, Icon, Segment } from "semantic-ui-react";
import { refreshWorkDateDataId } from "../../redux/workdates/workDateActions";
import firebase from "../../firebase";

class DonePane extends Component {
  state = {
    worksRef: firebase.database().ref("works"),
  };
  handleDeleteWork = (work) => {
    const { worksRef } = this.state;
    const { workDateId } = this.props;

    worksRef
      .child(workDateId)
      .child(work.id)
      .remove()
      .then(() => {
        this.props.refreshWorkDateDataId(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { doneWorks, workDateId } = this.props;

    return (
      <Segment className="ui orange segment" stacked>
        <Header>
          <Icon name="calendar check outline" color="orange"></Icon>
          <Header.Content>DONE</Header.Content>
        </Header>
        <Divider></Divider>

        {doneWorks &&
          doneWorks.length > 0 &&
          doneWorks.map((item) => (
            <Segment
              className="ui teal segment"
              key={item.id}
              attached
              clearing
            >
              {item.name}
              <Button
                icon="trash alternate"
                inverted
                color="red"
                floated="right"
                size="tiny"
                onClick={()=>this.handleDeleteWork(item)}
              ></Button>
            </Segment>
          ))}
      </Segment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  refreshWorkDateDataId: (id) => dispatch(refreshWorkDateDataId(id)),
});

export default connect(null, mapDispatchToProps)(DonePane);
