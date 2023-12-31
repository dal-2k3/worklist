import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Spinner = () => {
  return (
    <Dimmer active>
      <Loader size="huge" content="loading..."></Loader>
    </Dimmer>
  );
};

export default Spinner;
