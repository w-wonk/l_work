import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Link} from 'react-router'
import Trainer from './trainer.jsx'

class NueralNetwork extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(newProps) {
  }

  componentDidUpdate() {
  }

  render() {
    const pageHeaderNN = (
      <PageHeader>Neural Network  <small>use <a href="https://github.com/harthur/brain" target="_blank" >brain.js</a> library</small>
      </PageHeader>
    );
    return (
      <div className="search-result">
        {pageHeaderNN}
        <Trainer/>
        <div style={{marginTop: 6 + 'em'}}>
          <Link to='/' className="pull-right">Link to the Homework #2 - VK saver</Link>
        </div>
      </div>
    );
  }
}
;

export default NueralNetwork;