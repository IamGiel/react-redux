import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 👇 this is a way to connect our redux-store to react
import { connect } from 'react-redux';
import { updateUser } from "./actions/";

class App extends Component {
  //we need to access`this` on `onUpdateUser` method so we need to bind `this`
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(){
    this.props.onUpdateUser('Sammy');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LifeZone Triangle</h1>
        </header>
        <div onClick={this.onUpdateUser}>Update User</div>
        {this.props.user}
      </div>
    );
  }
}
// 👇 here we define the three parameters in `connect` method
//    define what we want from the store
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})
const mapActionsToProps = action => {
  onUpdateUser:updateUser
};
// 👇 here we use `connect` and pass three parameters
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
