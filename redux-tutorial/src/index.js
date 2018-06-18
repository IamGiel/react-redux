import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//modified code here
import { createStore } from 'redux';

//reducer
  function reducer(state, action) {
    console.log("this is action 💪 ",action)
    return 'hello 🌎';
  }
const store = createStore(reducer);
console.log(store.getState())

//dispatching an action
const action = {
  type: 'changeState',
  payload: {
    newState: 'New state'
  }
}
//set action to the store
store.dispatch(action);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
