class Component extends React.Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor(props)', props);
  }
  componentWillMount() {
    console.log('componentWillMount()');
  }
  componentDidMount() {
    console.log('componentDidMount()');
  }
  // Updating
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps(nextProps)', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState)', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate(nextProps, nextState)', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState)', prevProps, prevState);
  }
  // Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    console.log('render()');
    return (
      <div className="component">
        <h2>Component</h2>
        <div className="code">
          {'this.setState({ value: '}
          <input type="text" onChange={e => this.handleChange(e)} />
          {'})'}
        </div>
        <div className="values code">
          <div>this.props.value: {this.props.value}</div>
          <div>this.state.value: {this.state.value}</div>
        </div>
      </div>
    );
  }
}

class ComponentWrapper extends React.Component {
  state = { mounted: false }
  mount() {
    this.setState({
      mounted: true
    });
  }
  unmount() {
    this.setState({
      mounted: false
    });
  }
  handleValueChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    const button = this.state.mounted ?
      <button onClick={() => this.unmount()}>Unmount</button> :
      <button onClick={() => this.mount()}>Mount</button>
    return (
      <div className="component-wrapper">
        <h2>Wrapper</h2>
        <small>
          Open the console to see which lifecycle methods are being executed.
        </small>
        <div className="code">
          {'<Component value={'}
          <input type="text" onChange={e => this.handleValueChange(e)} />
          {'} />'}
          {button}
        </div>
        {this.state.mounted && <Component value={this.state.value} />}
      </div>
    );
  }
}

ReactDOM.render(
  <ComponentWrapper />,
  document.getElementById('root')
);
