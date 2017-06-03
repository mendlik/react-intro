import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  CHANGE_FILTER
} from './actions';

const initialState = {
  items: null,
  filter: ''
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COUNTRIES:
      return Object.assign({}, state, {
        items: action.response.countries
      });
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        items: null
      });
    case CHANGE_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    default:
      return state;
  }
};

export default countriesReducer;
