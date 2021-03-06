import React, { Component } from 'react';
import {
  Alert,
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
import Icon from 'react-native-vector-icons/FontAwesome';
import EditAddrPage from './EditAddrPage'
const WEIXIN_PAY = require('../../asset/images/2x/ic_tixianweixinzhifu.png');
const ZHIFUBAO_PAY = require('../../asset/images/2x/ic_tixianzhifubiao.png');
const CHECKED = require('../../asset/images/3x/btn_xuanze_downx.png');
const UN_CHECKED = require('../../asset/images/3x/btn_xuanze_upx.png')
export default class AddressListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
      list: [
        {
          key: 1,
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
          key: 2,
          id: 2,
          name: 'wyj',
          phone: 18888888888,
          address: 'bbbbbbb',
          city: '滨江区',
          province: '浙江省',
          district: '杭州市',
          _default: 0
        }
      ]
    }
  }

  // 循环地址
  _renderAddr(item){
    console.dir(item)
    return (
        <View style={{width: width,  marginBottom: 5, backgroundColor: 'white'}}>
          <View style={{
              flexDirection: 'row', padding: 10, width: '100%', 
              backgroundColor:'white',borderBottomWidth: 1,
              borderColor: '#f2f2f2'
            }}>
            <View style={{flex:5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Icon name='check-circle' size={15} style={{color: item.item._default ? 'orange' : 'grey'}}/>
              <Text style={{marginLeft: 5,color: item.item._default ? 'orange' : 'grey'}}>{item.item._default ? '默认地址' : '地址'}</Text>
            </View>
            <View style={{flex:1, alignSelf: 'flex-end', width: 30, flexDirection: 'row'}}>
              <Icon name='pencil-square-o' onPress={() => this._editAttr(item.item)} size={20}/>
              <Icon style={{marginLeft: 10}} onPress={() => this._confirmRemove(item.item.id)} name='trash-o' size={20}/>
            </View>
          </View>
          <View style={{padding: 10, justifyContent: 'center',borderBottomWidth: 1,
              borderColor: '#f2f2f2'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{margin: 5, color: 'gray'}}>{item.item.name}</Text>
              <Text style={{margin: 5}}>{item.item.phone}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{margin: 5, color: 'gray'}}>[默认]</Text>
              <Text style={{margin: 5}}>{
                                          item.item.province + 
                                          item.item.district + 
                                          item.item.city +
                                          item.item.address
                                      }
              </Text>
            </View>
          </View>
        </View>
      );
  }

  // 编辑地址
  _editAttr(data){
    this.props.navigator.push({
      component: EditAddrPage,
      passProps: { navigator: this.props.navigator, title: '修改地址', data: data}
    })
  }
  // 新增地址
  _addAddr(){
    this.props.navigator.push({
      component: EditAddrPage,
      passProps: { navigator: this.props.navigator, title: '添加地址'}
    })
  }

  // 删除地址
  _confirmRemove(id){
    Alert.alert(
      '提示',
      '确认删除该地址？',
      [
        {text: '确认', onPress: () => this._removeAddr(id)},
        {text: '取消', style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  _removeAddr(id){
    var new_arr = [];
    this.state.list.map((val)=>{
      if (val.id != id){
        new_arr.push(val);
      }
    })
    this.setState({
      list: new_arr
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
              <Icon 
                name='plus-square-o' 
                onPress={this._addAddr.bind(this)}
                style={{alignSelf: 'flex-end', color: 'orange'}} size={20}/>
            </View>
          </View>
          <View style={{width: '100%'}}>
            <FlatList 
              data={this.state.list}
              extraData={this.state.list}
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
