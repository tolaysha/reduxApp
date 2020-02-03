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
import { createStore, applyMiddleware  } from "redux"
import rootReducer from "./reducrers/index"
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(mySaga)
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>, document.getElementById('root')
);

