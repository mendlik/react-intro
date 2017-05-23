import React from 'react';
import FilterableList from './components/FilterableList';
import Loading from './components/Loading';

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: null };
  }
  componentDidMount() {
    setTimeout(() => this.fetchCountries(), 500);
  }
  fetchCountries() {
    fetch('./countries.json')
      .then(resp => resp.json())
      .then(resp => this.setState({ countries: resp.countries }));
  }
  render() {
    return this.state.countries ?
      <FilterableList items={this.state.countries} /> :
      <Loading />;
  }
}

export default Countries;
