const Header = ({ title }) => <h1>{title}</h1>;

const Footer = () => <footer>@2017</footer>;

const App = () => (
  <div>
    <Header title="Hello from App" />
    Some content
    <Footer />
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
