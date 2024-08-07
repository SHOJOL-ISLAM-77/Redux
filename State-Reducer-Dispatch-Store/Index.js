// constant

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const RESET = "RESET";

// state

const initialState = {
  count: 0,
};

// action - increment , decrement, reset

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// store

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementByValue(5));

// {
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(resetAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(decrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
//   store.dispatch(incrementAction());
// }
