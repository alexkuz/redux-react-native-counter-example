import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

let initialState = 0;

const increment = state => state + 1;

const decrement = state => state + 1;

export default function counter(state = initialState, action) {
  return ({
    [INCREMENT_COUNTER]: increment,
    [DECREMENT_COUNTER]: decrement
  }[action.type] || (s => s))(state, action);
}
