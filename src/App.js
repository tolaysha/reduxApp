import React, { Component, Fragment} from 'react';
import './App.css';
import ChangeName from "./components/ChangeName"
import NavBar from "./components/NavBar"

class App extends Component {
  debugger;
  render() {
    return (
      <Fragment  class="grid-container">
        <div class="grid-container">
          <div class="navbar">
            <NavBar />
          </div>
          
          <div class="sidebar"></div>
          <div class="content">
            <ChangeName />
          </div>
          
        </div>
          
        
      </Fragment>

    );
  }
}
export default App;