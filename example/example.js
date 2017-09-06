import { render } from 'react-dom';
import React, { Component } from 'react';
import withReducer from '../index';
import reducer from './example.reducer';
import { INCREMENT, DECREMENT } from './example.actions';

class Example extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.props.dispatch(INCREMENT);
  };

  decrement = () => {
    this.props.dispatch(DECREMENT);
  };

  render() {
    const { counter } = this.props;

    return (
      <div>
        <button onClick={this.decrement} type="button">
          -
        </button>
        <span>{counter}</span>
        <button onClick={this.increment} type="button">
          +
        </button>
      </div>
    );
  }
}

const ExampleWithReducer = withReducer(reducer)(Example);

render(<ExampleWithReducer />, document.getElementById('root'));
