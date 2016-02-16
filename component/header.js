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

var HeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff0000'
  },
});

var Header = React.createClass({
  render: function() {
    return (
      <View style={HeaderStyles.container}>
        <Text>首页</Text>  
      </View>
    );
  }
});

module.exports = Header;