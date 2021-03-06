import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopPage from '../public/Top'
import SlideComp from '../../components/Slide'
import ClassifyPage from './classify'
import TimeLimitPage from './timelimit'
import EventPage from './event'
import GoodsListPage from './goodslist'
import LeftSlide from '../public/LeftSilde'
const BANNER_IMGS = [  
    require('../../asset/images/banner1.png'),  
    require('../../asset/images/banner2.png'),  
    require('../../asset/images/banner3.png')
];  
const {width, height} = Dimensions.get('window');
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      maskLeft: new Animated.Value(-width),
      bodyLeft: new Animated.Value(0),
      maskOpc: new Animated.Value(0)
    };
  }

  _showMask() {
    // this.setState({maskLeft: 0})
    console.log('显示')
    Animated.parallel([
      Animated.timing(
        this.state.bodyLeft,
        {
          toValue: width /3 *2,
          duration: 300
        }
      ),
      Animated.timing(
        this.state.maskLeft, 
        {
          toValue: 0,
          duration: 200
        }
      )
    ]).start();
  }

  _hideMask() {
    // this.setState({maskLeft: -width})
    Animated.parallel([
      Animated.timing(
        this.state.bodyLeft,
        {
          toValue: 0,
          duration: 200
        }
      ),
      Animated.timing(                     
        this.state.maskLeft,
        {
          toValue: -width,
          duration: 300
        }
      )
    ]).start();
  }

  render() {
    return (
      /*  主体  */
      <View style={{width: width, height:height-20}}>
        <Animated.View style={[styles.leftMask,{left: this.state.maskLeft}]}>
          <View style={styles.leftLan}>
            <LeftSlide navigator={this.props.navigator} index={0}/>
          </View>
          <TouchableOpacity onPress={this._hideMask.bind(this)} style={styles.leftOpc}></TouchableOpacity>
        </Animated.View>
        <Animated.ScrollView 
          style={{left: this.state.bodyLeft}}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}
          >
            <TopPage _showMask={this._showMask.bind(this)}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{flex: 1}}></View>
                <View style={styles.centerStyle}>
                  <Image 
                      source={require('../../asset/images/3x/shou34xxhdpi.png')} 
                      style={{height:25, resizeMode: 'contain'}}
                    />
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
            </TopPage>
            <SlideComp banners={BANNER_IMGS}/>
            <ClassifyPage navigator={this.props.navigator} />
            <TimeLimitPage />
            <EventPage />
            <GoodsListPage />
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    // flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
    // backgroundColor: 'green'
  },
  leftMask: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    zIndex: 100,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  leftLan: {
    width: width/3*2, 
    height: height, 
    backgroundColor: 'red',
    zIndex: 100
  },
  leftOpc: {
    width: width/3,
    height: height
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
