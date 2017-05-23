const Header = ({ title }) => <h1>{title}</h1>;

const Footer = () => <footer>@2017</footer>;

const App = ({ content = "Lorem ipsum", n = 3 }) => (
  <div>
    <Header title="Hello from Content Generator" />
    { `${content} `.repeat(n) }
    <Footer />
  </div>
);


ReactDOM.render(
  <App n={100} />,
  document.getElementById('root')
);
