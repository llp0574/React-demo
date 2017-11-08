import React, { Component, PropTypes } from 'react';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initialValue
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    onClickIncrementButton() {
        this.updateCount(true);
    }

    onClickDecrementButton() {
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, previousValue);
    }

    render() {
        console.log('render');
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter.defaultProps = {
    initialValue: 0,
    onUpdate: f => f
};

export default Counter;