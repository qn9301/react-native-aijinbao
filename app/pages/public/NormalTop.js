import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Slide from '../../components/Slide'
export default class NormalTop extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: this.props.title
    };
  }

  _goback() {
    this.props.navigator.pop()
  }

  render() {
    return (
        <View style={[styles.top,{
            position:'relative'
          }]}>
          <View style={{width: 60,height: 40,justifyContent:'center',zIndex: 1, position: 'absolute', left:0, top:0,alignItems: 'center'}}>
            <TouchableOpacity onPress={this._goback.bind(this)}>
              <Image style={{height: 20, resizeMode: 'contain'}} source={require('../../asset/images/2x/ic_back.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{flex: 1, textAlign: 'center', fontSize: 15, lineHeight: 50}}>{this.state.title}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    backgroundColor: 'white'
  },
});
