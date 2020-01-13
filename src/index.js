// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import { Provider } from "react-redux"
// import { createStore } from "redux"
// import rootReducer from "./reducrers/index"

// const store = createStore(rootReducer)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducrers/index"

const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>, document.getElementById('root')
);

