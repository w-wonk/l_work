import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import $ from 'jquery';

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { song } = this.props;
        const { title, artist, url, aid } = song;
        const gridInstance = (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={10}><h4>{artist} - {title}</h4></Col>
                    <Col xs={6} md={2}>
                        <Button bsStyle="primary" href={url}>
                           Download me
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );

        return (
            <div>
                {gridInstance}
            </div>
        );
    }
};

export default Song;