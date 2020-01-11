import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import { setUser } from './reducrers/info'
import { connect } from "react-redux"
function handleClick(e) {
  debugger; // TOFIX
}
class App extends Component {
  debugger;
  render() { // TOFIX
    return (
          <Fragment>
            <h2>Welcome to React {this.props.user}</h2>
            <button onClick={()=>{debugger;this.props.onClick()}}>change store</button> 
          </Fragment>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    user: state.userInfo[0].user
  }
}
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {debugger;dispatch(setUser("new user"))}  // TOFIX
})

export default connect(mapStateToProps, mapDispatchToProps)(App);