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

export default class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <View style={[styles.topStyle, 
            {
                backgroundColor: this.props.bgcolor ? this.props.bgcolor: 'white',
            }
          ]}>
        <TouchableOpacity onPress={this.props._showMask} style={styles.leftStyle}>
          <Icon 
            name="bars"
            size={20}
            color={this.props.color ? this.props.color: 'black'}
          />
        </TouchableOpacity>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 40
  },
  leftStyle: {
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 99,
    left: 10,
    top: 10
  },
});
