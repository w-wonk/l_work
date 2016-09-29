import React from 'react';
import {Grid, Row, Col, FieldGroup, Button, InputGroup, FormControl, FormGroup} from 'react-bootstrap';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
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

    searchSong(q, ev) {
        console.log(this.state.search)
    }

    render() {
        const gridInstance =  (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>left</Col>
                    <Col xs={6} md={4}>right</Col>
                </Row>
            </Grid>
        );
        const formInstance = (
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl name="searchText" type="text" onChange={this.onChange.bind(this, 'searchText')}/>
                        <InputGroup.Button>
                            <Button bsStyle="primary" onClick={this.searchSong.bind(this, 1)}>Search</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        );
        return (
            <div className="search-box">
                {formInstance}
            </div>
        );
    }
};

export default SearchBox;