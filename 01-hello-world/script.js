const Header = (props) => <h1>{props.title}</h1>;

ReactDOM.render(
  <Header title="Hello from Functional Component" />,
  document.getElementById('root')
);
