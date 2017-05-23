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

const App = () => (
  <div>
    <Counter value={1} />
    <Counter value={2} />
    <Counter value={3} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
