// Same as:
// const Counter = () => <div>Counter</div>

class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter
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
