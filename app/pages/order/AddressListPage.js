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
  FlatList,
  WebView
} from 'react-native';
var {height, width} = Dimensions.get('window');
import NormalTop from '../public/NormalTop'
import SlideComp from '../../components/Slide'
import Icon from 'react-native-vector-icons/FontAwesome';
const WEIXIN_PAY = require('../../asset/images/2x/ic_tixianweixinzhifu.png');
const ZHIFUBAO_PAY = require('../../asset/images/2x/ic_tixianzhifubiao.png');
const CHECKED = require('../../asset/images/3x/btn_xuanze_downx.png');
const UN_CHECKED = require('../../asset/images/3x/btn_xuanze_upx.png')
var addr_list = [
  {
    id: 1,
    name: 'zyf',
    phone: 18888888888,
    address: 'adsadasd',
    city: '温州市',
    province: '浙江省',
    district: '瑞安市',
    _default: 1
  },
  {
    id: 1,
    name: 'zyf',
    phone: 18888888888,
    address: 'bbbbbbb',
    city: '滨江区',
    province: '浙江省',
    district: '杭州市',
    _default: 0
  }
];
export default class AddressListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num
    }
  }

  // 循环地址
  _renderAddr(item){
    console.dir(item)
    return (
        <View style={{width: width,  marginBottom: 5, backgroundColor: 'white'}}>
          <View style={{
              flexDirection: 'row', padding: 10,
              alignItems:'space-between', width: '100%', 
              backgroundColor:'white',borderBottomWidth: 1,
              borderColor: '#f2f2f2'
            }}>
            <View style={{flex:5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Icon name='check-circle' size={15} style={{color: item.item._default ? 'orange' : 'grey'}}/>
              <Text style={{marginLeft: 5,color: item.item._default ? 'orange' : 'grey'}}>{item.item._default ? '默认地址' : '地址'}</Text>
            </View>
            <View style={{flex:1, alignSelf: 'flex-end', width: 30, flexDirection: 'row'}}>
              <Icon name='pencil-square-o' size={20}/>
              <Icon style={{marginLeft: 10}} name='trash-o' size={20}/>
            </View>
          </View>
          <View style={{padding: 10, justifyContent: 'center',borderBottomWidth: 1,
              borderColor: '#f2f2f2'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{margin: 5, color: 'gray'}}>郑尼玛</Text>
              <Text style={{margin: 5}}>18888888888</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{margin: 5, color: 'gray'}}>[默认]</Text>
              <Text style={{margin: 5}}>立卡SD卡圣诞节爱了就爱的</Text>
            </View>
          </View>
        </View>
      );
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
          <View style={{marginBottom: 10,width: width, padding: 10, flexDirection: 'row', 
          alignItems: 'center', borderTopWidth: 1,borderColor: '#f2f2f2', backgroundColor: 'white'}}>
            <Text style={{flex: 1}}>新增地址</Text>
            <Text style={{flex: 3, fontSize: 12, color:'gray'}}>Add new address</Text>
            <View style={{flex: 1}}>
              <Icon name='plus-square-o' style={{alignSelf: 'flex-end', color: 'orange'}} size={20}/>
            </View>
          </View>
          <View style={{width: '100%'}}>
            <FlatList 
              data={addr_list}
              renderItem={this._renderAddr.bind(this)}
            />
          </View>
        </ScrollView>
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
