import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBKD11a-ditadWveV20bNrXK0TzJZ0K5po',
      authDomain: 'manager-46be7.firebaseapp.com',
      databaseURL: 'https://manager-46be7.firebaseio.com',
      projectId: 'manager-46be7',
      storageBucket: 'manager-46be7.appspot.com',
      messagingSenderId: '98455424182'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
