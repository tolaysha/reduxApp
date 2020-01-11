import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeName from "./components/ChangeName"
import { setUser } from './reducrers/info'
import { connect } from "react-redux"
function handleClick(e) {
  debugger; // TOFIX
}
class App extends Component {
  debugger;
  render() {
    return (
      <ChangeName />
    );
  }
}

// function mapStateToProps(state) {
//   debugger;
//   return {
//     user: state.userInfo[0].user
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   onClick: () => {debugger;dispatch(setUser("new user"))}  // TOFIX
// })

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;