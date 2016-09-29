import React from 'react';
import {PageHeader} from 'react-bootstrap';
import SearchResult from './search_result.jsx';
import { Link } from 'react-router'

class Main extends React.Component {
    render() {
        const pageHeaderInstance = (
            <PageHeader>VK saver <small>test application use api.vk.com</small></PageHeader>
        );
        return (
            <div className="header">
                {pageHeaderInstance}
                <SearchResult/>
                <Link to='/neural_network' className="pull-right">Link to the Homework #1 - Neural Network</Link>
            </div>
        );
    }
};

export default Main;
