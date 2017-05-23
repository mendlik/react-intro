import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES
} from './actions';

const initialState = {
  items: null,
  isFetching: false
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      return Object.assign({}, state, {
        items: action.response.countries,
        isFetching: false
      });
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        items: null,
        isFetching: true
      });
    default:
      return state;
  }
};

export default countriesReducer;
