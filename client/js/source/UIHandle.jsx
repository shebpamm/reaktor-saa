import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container.jsx'
import { createStore } from 'redux'

function data(state = null, action) {
  switch (action.type) {
    case 'SET_DATA':
      return state = action.payload;
    default:
      return state;

  }
}

var store = createStore(data)

store.dispatch({
  type: 'SET_DATA',
  payload: 'asd'
});

//Load the inital structure
ReactDOM.render(<Container />, document.getElementById('root'))
