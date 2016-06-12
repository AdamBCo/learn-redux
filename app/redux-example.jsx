var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state, action) => {
  state = state || {name: "Anonymous"};

  console.log('New Action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }

  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Adam'
};

store.dispatch(action);
