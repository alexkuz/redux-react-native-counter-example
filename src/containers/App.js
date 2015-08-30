import React, { Component } from 'react-native';
import Counter from '../components/Counter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import * as stores from '../stores';

const store = createStore(combineReducers(stores));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Counter />}
      </Provider>
    );
  }
}
