class Countries extends React.Component {
  render() {
    return <div>Countries</div>;
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
