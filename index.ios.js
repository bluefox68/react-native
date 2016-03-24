import React from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import App from './container/app';
// import reducers from './reducer/reducer';

var {
  AppRegistry,
  ListView,
  View,
  Text,
  Image,
  StyleSheet
} = React;

// let store = createStore(reducers);
var react = React.createClass({
  render: function() {
    return (
      // <Provider store={store}>
        <App />
      // </Provider>
    );
  }
});

AppRegistry.registerComponent('react', () => react);
