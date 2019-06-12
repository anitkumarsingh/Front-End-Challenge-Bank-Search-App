import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  loading: true,
  bank: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.LOADED:
      return {
        ...state,
        loading: false,
        bank: action.bank,
      };
    default:
      return state;
  }
}

//Selectors
export function getValue(state, key) {
  const value = state["home"][key];
  switch (key) {
    default:
      return value;
  }
}

export function getAllValues(state, key) {
  return state["home"];
}
