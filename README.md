# with-reducer

This React High Order Component allows you to dispatch actions with no need of `redux` as dependency.

### Install

```
npm install with-reducer
```

```
yarn add with-reducer
```

### Usage

1. Create your compoennt like any other in your application, with the difference that, instead of export the component alone, you wrap your component into a `withReducer` funtion that will get your reducer function and then the component itself.

> By doing that, you will get just for free a `dispatch` function into your props.

```
// example.js

import React, { Component } from 'react';
import withReducer from 'with-reducer';
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

export default withReducer(reducer)(Example);
```

2. Create your reducer

```
// example.reducer.js

import { INCREMENT, DECREMENT } from './example.actions';

export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - 1
      });
    default:
      return state;
  }
};
```

3. And then your actions

```
// example.actions.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
```

#### dispatch(actionType, payload)

This function will receive the name of the action to be executed and the payload (in case you need it)

It will automatically set the state and pass the same value as a prop in your component.

### Contributing

I would love to see you contributing to with-reducer, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/with-reducer/issues).

[Pull request](https://github.com/aganglada/with-reducer/pulls) are more than welcome ❤️️


### License

MIT &copy; aganglada