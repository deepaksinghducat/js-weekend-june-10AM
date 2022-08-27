import { connect } from "react-redux";
import React, { Component } from "react";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../redux/constants/CounterActions";

class CounterClass extends Component {
  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch({type: COUNTER_INCREMENT}),
	decrement: () => dispatch({type: COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
