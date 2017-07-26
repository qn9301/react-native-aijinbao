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
export default class TopPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.topStyle}>
        <TouchableOpacity onPress={this.props._showMask} style={styles.leftStyle}>
          <Icon 
            name="bars"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.centerStyle}>
          <Image source={require('../../asset/images/3x/shou34xxhdpi.png')} style={{height:25, resizeMode: 'contain'}}/>
        </View>
        <View style={styles.rightStyle}>
          <Icon 
            name="search"
            size={20}
            color="black"
          />
          <Icon 
            name="calendar-check-o"
            size={20}
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: 'white'
  },
  leftStyle: {
    flex: 1,
    height: 30
  },
  centerStyle: {
    flex: 3,
    height: 30,
    alignItems: 'center'
  },
  rightStyle: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
