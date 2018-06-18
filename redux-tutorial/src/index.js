import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//modified code here
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productReducer, userReducer } from './reducers'

  // the reducers are placed in a different folder 🗂
  // and are being imported here 
    // function productReducer(state = [], action) {
    //   return state;
    // }
    // function userReducer(state = "", { type, payload }) {
    //   //es6 object destructor here
    //   switch (type) {
    //     case "updateUser":
    //       return payload.user;
    //   }
    //   return state;
    // }


  const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
  })
  //creating the store provided my redux `createStore` method
  //it takes 3 parameters here
  const store = createStore(
    //first: pass the combineReducer const here
    allReducers,
    //second: the properties hard coded here
    {
    products: [{"name":"MacPro"}],
    user: "Gel"
    },
    //third: check if browser has devtool extension for redux
    window.devToolsExtension && window.devToolsExtension()
  );

//To change data, we need to dispatch an action

// store.getState() ,  gives us the “state” of the application 
// as on the time at which we called the getState method.
console.log(store.getState())

ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
