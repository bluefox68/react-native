'use strict';
var React = require('react-native');

var Header = require("./component/header");
var Content = require("./component/content");
var Footer = require("./component/footer");

var {
  AppRegistry,
  ListView,
  View,
  Text,
  Image,
  StyleSheet
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
        <Header />
        <Content />
        <Footer />     
      </View>
    );
  }
});

AppRegistry.registerComponent('react', () => react);
