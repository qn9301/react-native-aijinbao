import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');
// import Slide from '../../components/Slide'
export default class TimeLimitPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image 
              style={{height: 80, width: width}} 
              source={require('../../asset/images/low_price.png')} 
              />
        </View>
        <View style={{flexDirection: 'row', position:'absolute', top: 30, left: 20}}>
          <Image source={require('../../asset/images/2x/zhongs.png')} 
              style={{width: 16, height: 16}}/>
          <Text style={{paddingLeft: 5, backgroundColor: 'white', fontWeight: '700'}}>距离开始还有</Text>
        </View>
        <View style={styles.cutdown}>
          <Text style={{color: 'red'}}>2天</Text>
          <View style={styles.perTime}><Text style={{fontSize: 12, color:'white'}}>12</Text></View>
          <View style={styles.perTime}><Text style={{fontSize: 12, color:'white'}}>30</Text></View>
          <View style={styles.perTime}><Text style={{fontSize: 12, color:'white'}}>30</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'white'
  },
  cutdown: {
    position: 'absolute',
    left: 20,
    top: 55,
    flexDirection: 'row'
  },
  perTime: {
    height: 18,
    width: 25,
    paddingLeft: 5,
    paddingTop: 2,
    borderRadius: 3,
    backgroundColor: 'red',
    marginLeft: 2
  }
});
