import React from 'react';
import {PageHeader} from 'react-bootstrap';
import SearchResult from './search_result.jsx';

class Main extends React.Component {
    render() {
        const pageHeaderInstance = (
            <PageHeader>VK saver <small>test application use api.vk.com</small></PageHeader>
        );
        return (
            <div className="header">
                {pageHeaderInstance}
                <SearchResult/>
            </div>
        );
    }
};

export default Main;