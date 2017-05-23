class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: null };
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
