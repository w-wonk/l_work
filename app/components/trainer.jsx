import React from 'react';

class Trainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            output: ''
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.train();
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(newProps) {
    }

    componentDidUpdate() {
    }

    train(){
        var brain = require('brain.js');
        var net = new brain.NeuralNetwork();
        net.train(
            [{input: [3/100, 5/100], output: [75/100]},
            {input: [5/100, 1/100], output: [82/100]},
            {input: [10/100, 2/100], output: [93/100]}],
            {
                errorThresh: 0.005,  // error threshold to reach
                iterations: 20000,   // maximum training iterations
                learningRate: 0.3    // learning rate
            }
        )
        var output = net.run([8/100, 3/100]) * 100;
        this.setState({output: output})
    }

    render() {
        const result = this.state.output
        return (
            <div className="search-result">
                {result}
            </div>
        );
    }
};

export default Trainer;