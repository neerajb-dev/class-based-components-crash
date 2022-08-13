import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Admin from './components/Admin';
import Header from './components/Header';
// import Product from './components/Product';
// import User from './components/User';

// lazy loading
const Admin = React.lazy(() => import("./components/Admin"));
const Product = React.lazy(() => import("./components/Product"));
const User = React.lazy(() => import("./components/User"));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Header />
        <React.Suspense fallback={<div>Loading....</div>} >;
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/user" component={User} />
        </React.Suspense>
      </Router>
    )
  }
}