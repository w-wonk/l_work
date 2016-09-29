import React from 'react';
import { Table, FormGroup, Button, ControlLabel, FormControl, Col } from 'react-bootstrap';

class Trainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            train: [{input: [3/100, 5/100], output: [75/100]},
                {input: [5/100, 1/100], output: [82/100]},
                {input: [10/100, 2/100], output: [93/100]}],
            test: [],
            output: '',
            sleepHour: '',
            studyHour: ''
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

    onChange(name, ev) {
        this.setState({[name]: ev.target.value});
    }

    updateTest(sleep, study, ev) {
        ev.preventDefault();
        this.setState({test: [parseInt(sleep) / 100, parseInt(study) / 100]});
        this.train();
    }

    train(sleep, study, ev){
        ev.preventDefault();
        var brain = require('brain.js');
        var net = new brain.NeuralNetwork();
        net.train(
            this.state.train
        );
        var output = net.run([parseInt(sleep)/100, parseInt(study)/100]);
        var new_test = {input: [parseInt(sleep)/100, parseInt(study)/100], output: [Math.round(output*100)/100]};
        this.state.train.push(new_test);
        console.log(output);
        this.setState({output:  output})
    };

    render() {
        const formInstance = (
            <form>
                <FormGroup controlId="formSleepHour" >
                    <Col componentClass={ControlLabel} xs={2}>
                        Sleep hours
                    </Col>
                    <Col xs={2}>
                        <FormControl name="sleepHour" type="text" onChange={this.onChange.bind(this, 'sleepHour')}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formStudyHour" >
                    <Col componentClass={ControlLabel} xs={2}>
                        Study hours
                    </Col>
                    <Col xs={2}>
                        <FormControl name="studyHour" type="text" onChange={this.onChange.bind(this, 'studyHour')}/>
                    </Col>
                </FormGroup>
                <Col xs={2} xsOffset={2}>
                    <Button type="submit" bsStyle="primary" onClick={this.train.bind(this, this.state.sleepHour, this.state.studyHour)}>
                        Train
                    </Button>
                </Col>
            </form>
        );
        const result = (
            <tr key='result' className="info">
                <td>{this.state.train.length + 1}</td>
                <td>{this.state.test[0] * 100}</td>
                <td>{this.state.test[1]* 100}</td>
                <td>{Math.round(this.state.output * 100)} </td>
            </tr>
        );
            Math.round(this.state.output * 100);
        const trainInput = this.state.train.map((obj, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{obj.input[0] * 100}</td>
                <td>{obj.input[1] * 100}</td>
                <td>{obj.output * 100} </td>
            </tr>
        );
        const tableInstance = (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Sleep hours</th>
                    <th>Study hours</th>
                    <th>Result on test</th>
                </tr>
                </thead>
                <tbody>
                    {trainInput}
                </tbody>
            </Table>
        );
        return (
            <div className="neural-network">
                {tableInstance}
                {formInstance}
            </div>
        );
    }
};

export default Trainer;