import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { environmentIsDev } from 'utils/constants/environmentVariables';

import reducer from 'store/rootReducer';

export function initializeStore(initialState = {}) {
  return environmentIsDev
    ? createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
      )
    : createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}

export default initializeStore;
