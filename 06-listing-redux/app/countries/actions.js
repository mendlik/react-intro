export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
});

export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const receiveCountries = response => ({
  type: RECEIVE_COUNTRIES,
  response
});

export const fetchCountries = () =>
  (dispatch) => {
    dispatch(requestCountries());
    return setTimeout(
      () => fetch('./countries.json')
        .then(response => response.json())
        .then(json => dispatch(receiveCountries(json)))
      , 500);
  };
