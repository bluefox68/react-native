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
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor: '#00ff00'
  }
});

var Footer = React.createClass({
  render: function() {
    return (
    	<View style={styles.container}>
	      <Text>尾部</Text>
	    </View>
    );
  }
});

module.exports = Footer;