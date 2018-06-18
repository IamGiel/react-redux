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
    switch(action.type){
      case 'updateUser':
        return action.payload.user
    }
    return state;
  }
  const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
  })
  //creating the store
  const store = createStore(//function that takes 3 parameters here
    //one: pass the combineReducer const here
    allReducers,
    //two: the properties hard coded here
    {
    products: [{"name":"MacPro"}],
    user: "Gel"
    },
    //three: check if browser has devtool extension for redux
    window.devToolsExtension && window.devToolsExtension()

);

console.log(store.getState())

//update state
const updateUserAction = {
  type:'updateUser',
  payload: {
    user:'John'
  }
}
const updateUserAction2 = {
  type: "updateUser",
  payload: {
    user: "Mike",
    product:"Windows - PC"
  }
};
store.dispatch(updateUserAction);
store.dispatch(updateUserAction2)

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
