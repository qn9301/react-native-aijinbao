import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  ListView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  RefreshControl,
  TextInput,
  WebView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import NormalTop from '../public/NormalTop'
import SlideComp from '../../components/Slide'
import Icon from 'react-native-vector-icons/FontAwesome';
import addressListPage from './AddressListPage';

const WEIXIN_PAY = require('../../asset/images/2x/ic_tixianweixinzhifu.png');
const ZHIFUBAO_PAY = require('../../asset/images/2x/ic_tixianzhifubiao.png');
const CHECKED = require('../../asset/images/3x/btn_xuanze_downx.png');
const UN_CHECKED = require('../../asset/images/3x/btn_xuanze_upx.png');

var top_list = [];
export default class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num
    }
  }

  componentWillMount() {
  }

  _pay(){
    alert('支付')
  }

  // 地址列表
  _addressListPage(){
    this.props.navigator.push({
      component: addressListPage,
      title: '我的地址',
      passProps: { navigator: this.props.navigator, title: '我的地址'}
    })
  }

  render() {
    hasAddress = true;
    return (
      /*  主体  */
      <View style={{height: '100%'}}>
        <ScrollView 
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}
          >
          <NormalTop navigator={this.props.navigator} title={this.props.title}/>
          <View style={{
              flexDirection: 'row', 
              alignItems: 'center', 
              height: 40, 
              backgroundColor: 'white',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#f2f2f2'
            }}>
            <Text style={{flex: 2, marginLeft: 20}}>配送方式</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.sendType, {backgroundColor: 'orange', color:'white'}]}>邮寄</Text>
              <Text style={[styles.sendType, {backgroundColor: 'white', color:'gray'}]}>存金库</Text>
            </View>            
          </View>

          {
            hasAddress ?
            <TouchableOpacity style={{flexDirection: 'row', height: 80, borderColor: 'orange',
                        backgroundColor: 'white', borderBottomWidth: 2, marginBottom: 8}}
                onPress={this._addressListPage.bind(this)}
              >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                  name="map-marker"
                  size={20}
                  color="orange"
                />
              </View>
              <View style={{flex: 10, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{margin: 5, color: 'gray'}}>郑尼玛</Text>
                  <Text style={{margin: 5}}>添加地址</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{margin: 5, color: 'gray'}}>[默认]</Text>
                  <Text style={{margin: 5}}>立卡SD卡圣诞节爱了就爱的</Text>
                </View>
              </View>
              <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                  name="angle-right"
                  size={20}
                  color="black"
                />
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{flexDirection: 'row', height: 80, borderColor: 'orange',
                        backgroundColor: 'white', borderBottomWidth: 2, marginBottom: 8}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                  name="map-marker"
                  size={20}
                  color="orange"
                />
              </View>

              <View style={{flex: 10, justifyContent: 'center'}}>
                <Text style={{margin: 5}}>添加地址</Text>
                <Text style={{margin: 5, color: 'gray'}}>add Address</Text>
              </View>
              <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                  name="angle-right"
                  size={20}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          }
          <View style={{flexDirection: 'row', height: 40, borderColor: '#f2f2f2',
              backgroundColor: 'white', borderBottomWidth: 1}}>
            <View style={{flex: 1, flexDirection: 'row', height: '100%', alignItems: 'center'}}>
              <Icon 
                name="home"
                size={18}
                color="orange"
                style={{margin: 5}}
              />
              <Text style={{fontSize: 13}}>爱金宝</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white'}}>
            <View style={{width: 90}}>
              <Image 
                style={{height: 80, width: 80, flex: 1, resizeMode: 'contain',
                        borderWidth: 1, borderColor: '#f2f2f2'}}
                source={require('../../asset/images/mall_coin_1.png')} /> 
            </View>
            <View style={{flex: 3, flexDirection: 'column', paddingTop: 5}}>
              <Text>品茗图足银茶套装</Text>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: 'gray'}}>x1</Text>
                <Text style={{marginLeft: 10, 
                    backgroundColor: 'orange', 
                    color: 'white',
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontSize: 12,
                    paddingTop: 1.5
                  }}>HOT</Text>
              </View>
            </View>
            <View style={{flex: 1, paddingTop: 5}}>
              <Text style={{color: 'orange'}}>￥8900</Text>
            </View>
          </View>
          <View style={{width: width, borderBottomWidth: 1, borderColor: '#f2f2f2', backgroundColor: 'white'}}>
            <Text style={{padding: 10}}>支付方式</Text>
          </View>
          <View style={{
              flexDirection: 'row', 
              width: '100%', 
              alignItems: 'center', 
              justifyContent: 'flex-start',
              padding: 10,
              backgroundColor: 'white', 
            }}>
            <View>
              <Image style={{width: 30, height: 30, resizeMode: 'contain'}} source={WEIXIN_PAY}/>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>微信支付</Text>
            </View>
            <View style={{width: 20, position: 'absolute', right: 10}}>
              <Image style={{width: 20, height: 20}} source={UN_CHECKED}/>
            </View>
          </View>
          <View style={{
              flexDirection: 'row', 
              width: '100%', 
              alignItems: 'center', 
              justifyContent: 'flex-start',
              padding: 10,
              backgroundColor: 'white',
              marginBottom: 10
            }}>
            <View>
              <Image style={{width: 30, height: 30, resizeMode: 'contain'}} 
                  source={ZHIFUBAO_PAY}/>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>支付宝支付</Text>
            </View>
            <View style={{width: 20, position: 'absolute', right: 10}}>
              <Image style={{width: 20, height: 20}} source={UN_CHECKED}/>
            </View>
          </View>
          <View style={{width: '100%', padding: 5, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', padding: 5}}>
              <Text style={{flex: 3, color: 'gray'}}>商品总价：</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>￥8900.00</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 5}}>
              <Text style={{flex: 3, color: 'gray'}}>运费：</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>￥0.00</Text>
            </View>
            <View style={{flexDirection: 'row', padding: 5}}>
              <Text style={{flex: 3, color: 'gray'}}>应付金额：</Text>
              <Text style={{flex: 1, textAlign: 'right'}}>￥8900.00</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{
                height: 40, 
                backgroundColor: 'white', 
                borderTopWidth: 1,
                borderColor: '#f2f2f2',
                width: '100%',
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row'
            }}>
          <View style={{flex: 3, flexDirection: 'row',
                backgroundColor: 'white',alignItems: 'center'}}>
            <Text style={{marginLeft: 20, fontSize: 12}}>合计：</Text>
            <Text style={{color: 'orange', fontSize: 12}}>￥8900.00</Text>
          </View>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'orange', 
                      alignItems:'center', justifyContent: 'center'}}
                  onPress={this._pay.bind(this)}
                >
            <Text style={{fontSize: 15, color: 'white', fontWeight: '700'}}>立即支付</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  orange: {
    fontSize: 12,
    marginLeft: 5,
    color: 'orange'
  },
  sendType: {
    width: 50, 
    height: 20, 
    lineHeight: 18,
    textAlign:'center'
  }
});
