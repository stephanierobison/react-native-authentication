import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {  //lifecycle method that is automatically invoked
    firebase.initializeApp({
      apiKey: "AIzaSyAWzvVdHtC-C0qqxBhFWpilkc3PZzFm1wQ",
      authDomain: "authentication-defb0.firebaseapp.com",
      databaseURL: "https://authentication-defb0.firebaseio.com",
      storageBucket: "authentication-defb0.appspot.com",
      messagingSenderId: "609381594350"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true });
      } else {
        this.setState({loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
      );
      case false:
      return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
