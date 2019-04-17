import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Route, Link } from "react-router-dom"
import routes from "./routes"



class App extends Component {
  render() {
    return (

      <Route>
        <div >
          <Navbar />
          {routes}
        </div>
      </Route>
    );
  }
}

export default App;
