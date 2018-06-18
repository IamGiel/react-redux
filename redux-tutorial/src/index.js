import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//modified code here
import { combineReducers, createStore } from 'redux';

  //reducer
   function productReducer (state = [], action){
    return state;
  }
  function userReducer(state = '', action) {
    return state;
  }
  const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
  })
  //creating the store
  const store = createStore(allReducers, {
    products: [{"name":"MacPro"}],
    user: "Gel"
  });

console.log(store.getState())

// //dispatching an action
// const action = {
//   type: 'changeState',
//   payload: {
//     newState: '🌎 sees you!'
//   }
// }
// //set action to the store
// store.dispatch(action);

// console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
