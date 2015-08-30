import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
}

export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  }
}

export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
