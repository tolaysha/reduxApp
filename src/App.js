import React, { Component, Fragment} from 'react';
import './App.css';
import ChangeName from "./components/ChangeName"
import NavBar from "./components/NavBar"

class App extends Component {
  debugger;
  render() {
    return (
      <Fragment>
        <NavBar />
        <ChangeName />

      </Fragment>

    );
  }
}
export default App;