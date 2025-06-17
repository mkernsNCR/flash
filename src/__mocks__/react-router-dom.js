const React = require("react");

module.exports = {
  BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
  Routes: ({ children }) => {
    const firstChild = React.Children.toArray(children)[0];
    return React.createElement(React.Fragment, null, firstChild);
  },
  Route: ({ element }) => element,
  useParams: () => ({}),
  Link: React.forwardRef(({ children, to }, ref) =>
    React.createElement("a", { href: to, ref }, children)
  ),
};
