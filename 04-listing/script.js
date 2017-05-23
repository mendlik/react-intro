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
      <div>Countries loaded</div> :
      <div>Loading...</div>;
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
