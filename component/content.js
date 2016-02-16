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
    flex:8,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor: '#ffff00',
    height:20
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>内容</Text>  
      </View>
    );
  }
});

module.exports = Content;

