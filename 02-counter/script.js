class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  increment() {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>+</button> {this.state.value}
      </div>
    );
  }
}

Counter.defaultProps = {
  value: 1
};

Counter.propTypes = {
  value: React.PropTypes.number
};

const App = () => (
  <div>
    <Counter />
    <Counter value={1024} />
    <Counter value="abc" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
