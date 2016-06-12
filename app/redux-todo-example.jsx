var redux = require('redux');

console.log('Starting Redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
      break;
    default:
      return state;
  }

  return state;
}

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe

store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'HELLO'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'COOL'
});
