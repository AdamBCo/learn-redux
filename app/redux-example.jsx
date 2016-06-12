var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state, action) => {
  state = state || {name: "Anonymous"};
  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
