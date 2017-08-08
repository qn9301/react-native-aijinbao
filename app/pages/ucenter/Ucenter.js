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
import TopPage from '../public/Top'
import LeftSlide from '../public/LeftSilde'
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const ORDER = [
  {icon: require('../../asset/images/3x/ic_daifukuanx.png'), comp: false, title: '待付款'},
  {icon: require('../../asset/images/3x/ic_daifahuox.png'), comp: false, title: '待发货'},
  {icon: require('../../asset/images/3x/ic_daishouhuox.png'), comp: false, title: '待收货'},
  {icon: require('../../asset/images/3x/ic_daipingjiax.png'), comp: false, title: '待评价'}
];
const CUNJINKU = [
  {icon: require('../../asset/images/2x/c1x.png'), comp: false, title: '提现记录'},
  {icon: require('../../asset/images/2x/c2x.png'), comp: false, title: '卖金记录'},
  {icon: require('../../asset/images/2x/c3x.png'), comp: false, title: '资产记录'}
];
const OTHER = [
  {icon: require('../../asset/images/2x/d1x.png'), comp: false, title: '收藏'},
  {icon: require('../../asset/images/2x/d2x.png'), comp: false, title: '二维码'},
  {icon: require('../../asset/images/2x/d3x.png'), comp: false, title: '我的地址'},
  {icon: require('../../asset/images/2x/d4x.png'), comp: false, title: '客服'}
];
const WALLET = [
  {icon: require('../../asset/images/2x/d5x.png'), comp: false, title: '金豆'},
  {icon: require('../../asset/images/2x/d6x.png'), comp: false, title: '优惠券'}
];
const PAGE_DATA = [
  {title: '我的订单', data: ORDER, comp: false},
  {title: '存订单', data: CUNJINKU, comp: false},
  {title: '其他', data: OTHER, comp: false},
  {title: '钱包', data: WALLET, comp: false}
]
export default class UcenterPage extends Component {
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

  _gotoPage(title, comp){
    if (comp){
      this.props.navigator.push({
        component: comp,
        passProps: { navigator: this.props.navigator, title: title}
      })
    }
  }

  _renderItem(item){
    let _width = (width - 80) / 4
    return (
        <TouchableOpacity 
            style={{width: _width, paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => this._gotoPage(item.title, item.comp)}
        >
          <Image source={item.icon} style={{width: _width - 45, resizeMode: 'contain'}}/>
          <Text style={{fontSize: 12, color: 'gray'}}>{item.title}</Text>
        </TouchableOpacity>
      )
  }

  _renderRow(title, datas, comp){
    return (
        <View style={{marginTop: 10, width: '100%', backgroundColor: 'white'}}>
          <TouchableOpacity 
              style={{borderBottomWidth: 1,borderColor: '#f2f2f2', flexDirection: 'row', padding: 10, width: '100%',backgroundColor: 'white'}}
              onPress={()=>this._gotoPage(title, comp)}
          >
            <View style={{flex: 1}}>
              <Text>{title}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image 
                style={{height: 15, resizeMode: 'contain'}}
                source={require('../../asset/images/3x/ic_greyrigjtarrow.png')}
                />
            </View>
          </TouchableOpacity>
          <View style={{width: '100%', paddingLeft: 40, flexDirection: 'row'}}>
            {datas.map((v)=>{
              return this._renderItem(v);
            })}
          </View>
        </View>
      )
  }

  render() {
    return (
      /*  主体  */
      <View style={{width: width, height:height-20}}>
        <Animated.View style={[styles.leftMask,{left: this.state.maskLeft}]}>
          <View style={styles.leftLan}>
            <LeftSlide navigator={this.props.navigator} index={5}/>
          </View>
          <TouchableOpacity onPress={this._hideMask.bind(this)} style={styles.leftOpc}></TouchableOpacity>
        </Animated.View>
        <Animated.ScrollView 
          style={{left: this.state.bodyLeft}}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}
          >
          <TopPage _showMask={this._showMask.bind(this)} bgcolor='#ff9500' color='white'>
            <View style={{flex: 1}}></View>
            <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Text style={{color: 'white', fontSize: 18}}>个人中心</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <TouchableOpacity>
                <Icon size={20} style={{color: 'white'}} name='shopping-cart'/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon size={20} style={{color: 'white'}} name='plus'/>
              </TouchableOpacity>
            </View>
          </TopPage>
          <View style={{width: width, height: 140, backgroundColor: '#ff9500'}}>
            <View style={{flexDirection: 'row', width: '100%', paddingLeft: 20, marginTop: 60}}>
              <View style={{flex:1}}>
                <Image 
                    style={[styles.headimg, {backgroundColor: 'white'}]}
                    source={require('../../asset/images/3x/shou34xxhdpi.png')}
                  />
              </View>
              <View style={{justifyContent: 'space-around', height: 50, flex: 3}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{marginRight: 15, fontSize: 18, color: 'white'}}>If</Text>
                  <Text style={{fontSize: 18, color: 'white'}}>></Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.label}><Text style={{color: 'white'}}>实习饲养员</Text></View>
                  <View style={styles.label}><Text style={{color: 'white'}}>19金豆</Text></View>
                </View>
              </View>
              <View style={{height: 60, flex: 1}}>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 10, padding: 10, width: width,backgroundColor: 'white'}}>
            <View style={{flex: 1}}>
              <Text>余额</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image 
                style={{marginRight: 5, width: 20, height: 20, resizeMode: 'contain'}}
                source={require('../../asset/images/3x/ic_daifahuox.png')} />
              <Text style={{color: 'gray'}}>0.00</Text>
              <Text style={{color: 'gray'}}>元</Text>
              <Image 
                style={{height: 15, resizeMode: 'contain'}}
                source={require('../../asset/images/3x/ic_greyrigjtarrow.png')}
                />
            </View>
          </TouchableOpacity>
          {PAGE_DATA.map((v)=>this._renderRow(v.title, v.data, v.comp))}
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
    width: '100%',
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
    zIndex: 100
  },
  leftOpc: {
    width: width/3,
    height: height
  },
  headimg: {
    height: 60, 
    width: 60, 
    borderRadius: 30, 
    resizeMode: 'contain',
    borderWidth: 4,
    borderColor: 'orange'
  },
  label: {
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    marginRight: 10
  }
});
