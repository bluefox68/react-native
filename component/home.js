'use strict';
var React = require('react-native');
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
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#0000ff'
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>我是首页</Text>  
      </View>
    );
  }
});

module.exports = Home;