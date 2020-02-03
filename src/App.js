import React, { Component, Fragment} from 'react';
import './App.css';
import ChangeName from "./components/ChangeName"
import NavBar from "./components/NavBar"
import Table from "./components/materialuitable"

class App extends Component {
  debugger;
  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="navbar">
            
          <NavBar />
          </div>
          <div className="sidebar"></div>
          <div className="content">
            <Table />
            <ChangeName />
          </div>
          
        </div>
          
        
      </div>

    );
  }
}
export default App;