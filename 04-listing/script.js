const Loading = () => <div>Loading...</div>;

const List = ({ items }) => {
  const listItems = items.map(item => <li key={item}>{item}</li>);
  return <ul>{listItems}</ul>;
};

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

const App = () => (
  <div>
    <h1>Countries</h1>
    <Countries />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
