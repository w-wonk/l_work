import React from 'react';
import {PageHeader} from 'react-bootstrap';
import SearchResult from './search_result.jsx';
import {Link} from 'react-router'

class Main extends React.Component {
  render() {
    const pageHeaderInstance = (
      <PageHeader>VK music  <small>test application use <a href="https://vk.com/dev/main" target="_blank" > api.vk.com</a></small>
      </PageHeader>
    );
    return (
      <div className="header">
        {pageHeaderInstance}
        <SearchResult/>
        <Link to='/neural_network' className="pull-right">Link to the Homework #1 - Neural Network</Link>
      </div>
    );
  }
}
;

export default Main;
