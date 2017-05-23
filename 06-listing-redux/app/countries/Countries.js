import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from './actions';
import FilterableList from '../components/FilterableList';
import Loading from '../components/Loading';

class Countries extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCountries());
  }
  render() {
    return this.props.countries ?
      <FilterableList items={this.props.countries} /> :
      <Loading />;
  }
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  countries: state.countries.items
});

export default connect(mapStateToProps)(Countries);
