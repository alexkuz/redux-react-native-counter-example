import React, { Component } from 'react-native';
import Counter from '../components/Counter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux/native';
import * as stores from '../stores';
import thunk from 'redux-thunk';

const reducer = combineReducers(stores);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Counter />}
      </Provider>
    );
  }
}
