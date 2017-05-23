class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
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
    <Counter />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
