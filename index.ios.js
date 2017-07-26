import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    AppRegistry
} from 'react-native';
import RootNav from './app/RootNav';
export default class aijinbao extends Component {
  render() {
    return (
            <View style={styles.container}>
                <RootNav />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    }
});

AppRegistry.registerComponent('aijinbao', () => aijinbao);
