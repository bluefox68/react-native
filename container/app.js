import React from 'react-native';
// import { combineReducers } from 'redux';
// import { connect } from 'react-redux';


// import { CHANGE_PAGE, LOOK_DEPARTMEMBER_MEMBER, SEARCH_NOTICE,LOOK_NOTICE_DETAIL } from '../action/action';
// import reducer from '../reducer/reducer';

import Home from '../component/home';
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
  render: function(){
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

export default react;
// export default connect(reducer)(react);