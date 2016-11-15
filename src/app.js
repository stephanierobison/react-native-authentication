import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {  //lifecycle method that is automatically invoked
    firebase.initializeApp({
      apiKey: "AIzaSyAWzvVdHtC-C0qqxBhFWpilkc3PZzFm1wQ",
      authDomain: "authentication-defb0.firebaseapp.com",
      databaseURL: "https://authentication-defb0.firebaseio.com",
      storageBucket: "authentication-defb0.appspot.com",
      messagingSenderId: "609381594350"
    });
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
