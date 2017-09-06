# with-reducer

React High order Component that allow you to dispatch actions with no need of `redux` as dependency.

Redux architecture is really nice, but [you might not need it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367), instead you can only use `setState`.

But what about going a little bit further and keep your reducers as the key part of your application. `with-reducer` allows you to perfom this `setState` call, with a known interface like `redux`.

### Install

```
npm install with-reducer
```

```
yarn add with-reducer
```

### Usage

1. Create a component and export it with `withReducer`. You will need to provide a valid reducer for that component to work. 

> By doing that, you will get just for free a `dispatch` function into your props.

```js
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

```js
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

```js
// example.actions.js

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
```

That's it. Now you can do all your state modifications using `dispath` like you were dispathing a function in your `redux` app.

#### dispatch(actionType, payload = {})

* actionType: string
* payload: object, data you might need for that action.

This function will receive the name of the action to be executed and the payload (in case you need it).

It will automatically set the state and pass the same values as props in your component.

### Contributing

I would love to see you contributing to `with-reducer`, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/with-reducer/issues).

[Pull request](https://github.com/aganglada/with-reducer/pulls) are more than welcome ❤️️


### License

MIT &copy; aganglada
