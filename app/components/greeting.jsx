import React from 'react';
import {Button} from 'react-bootstrap';

class Greeting extends React.Component {
  render() {
    return (
        <div className="greeting">
          Hello, {this.props.name}!
          <Button bsStyle="primary">sd</Button>
        </div>
    );
  }
};

export default Greeting;