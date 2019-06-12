import * as types from './actionTypes';
import api from '../../../api';

export function getBankData(city) {
  // body...
  return async (dispatch, getState) => {
    dispatch({
      type: types.LOADING,
    });
    try {
      const bank = await api.getBankDetails(city);
      console.log(bank)
      dispatch({
        type: types.LOADED,
        bank,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
