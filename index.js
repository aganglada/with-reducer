import React from 'react';

export default reducer => WrappedComponent => {
  return class WithReducer extends WrappedComponent {
    constructor() {
      super(...arguments);
      this.dispatch = this.dispatch.bind(this);
    }

    dispatch(type, payload = {}) {
      this.setState(state => {
        return reducer(state, { type, ...payload });
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          dispatch={this.dispatch}
        />
      );
    }
  };
};
