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
    alignItems:'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff0000'
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>首页</Text>  
      </View>
    );
  }
});

module.exports = Header;