import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import HomePage from './pages/home/home.js'
export default class RootNav extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.topblock}></View>
          <Navigator
                initialRoute={{ name: '爱金宝', component: HomePage }}
                configureScene={(route) => ({
                  ...Navigator.SceneConfigs.HorizontalSwipeJump,
                  gestures: { pop: false }
                })}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component {...route.params} {...route.passProps} navigator={navigator} />
                }} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    topblock: {
      height: 20
    }
});