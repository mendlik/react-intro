import React from 'react';
import List from './List';

class FilterableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }
  handleFilterChange(event) {
    this.setState({
      filter: event.target.value
    });
  }
  render() {
    const filter = this.state.filter;
    const filtered = this.props.items
      .filter(item => item.includes(filter));
    return (
      <div>
        <input onChange={event => this.handleFilterChange(event)} />
        <List items={filtered} />
      </div>
    );
  }
}

export default FilterableList;
