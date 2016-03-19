'use strict';
var React = require('react-native');
var Home = require("./component/home");

var {
  AppRegistry,
  ListView,
  View,
  Text,
  Image,
  StyleSheet,
  NavigatorIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  }
});

var react = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: Home,
            title: '首页'
          }}
        /> 
      </View>
    );
  }
});


AppRegistry.registerComponent('react', () => react);
