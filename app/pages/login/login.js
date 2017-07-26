import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
export default class loginPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginbox}>
          <Text>
            登录
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft:20}}
            editable = {true}
            maxLength = {40}
            placeholder = {'请输入账号'}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft:20}}
            editable = {true}
            maxLength = {40}
            placeholder = {'请输入密码'}
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginbox: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  }
});
