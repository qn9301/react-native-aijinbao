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
const CHECKED = require('../../asset/images/3x/btn_xuanze_downx.png');
const UN_CHECKED = require('../../asset/images/3x/btn_xuanze_upx.png')
export default class EditAddrPage extends Component {
  constructor(props) {
    super(props);
    let obj;
    if (this.props.data){
      obj = {
              id: this.props.data.id,
              name: this.props.data.name,
              phone: this.props.data.phone.toString(),
              address: this.props.data.address,
              city: this.props.data.city,
              province: this.props.data.province,
              district: this.props.data.district,
              _default: this.props.data._default
            }
    }else{
      obj = {
              id: '',
              name: '',
              phone: '',
              address: '',
              city: '',
              province: '',
              district: '',
              _default: 0
            }
    }
    this.state = obj
  }

  _saveAddr(){
    console.dir(this.state)
    this.props.navigator.pop();
  }

  render() {
    hasAddress = true;
    return (
      /*  主体  */
      <View style={{height: '100%', backgroundColor: '#f2f2f2'}}>
        <ScrollView 
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}
          >
          <NormalTop navigator={this.props.navigator} title={this.props.title}/>
          <View style={{width: width, marginBottom: 20,
          alignItems: 'center', borderTopWidth: 1,borderColor: '#f2f2f2', backgroundColor: 'white'}}>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>收件人姓名</Text>
              <TextInput 
                style={{flex: 1, textAlign: 'right', color: 'gray', fontSize: 14}} 
                editable={true}
                maxLength={40}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                />
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>手机号码</Text>
              <TextInput 
                style={{flex: 1, textAlign: 'right', color: 'gray', fontSize: 14}} 
                editable={true}
                maxLength={40}
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
                />
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>选择省份</Text>
              <TextInput 
                style={{flex: 1, textAlign: 'right', color: 'gray', fontSize: 14}} 
                editable={true}
                maxLength={40}
                onChangeText={(province) => this.setState({province})}
                value={this.state.province}
                />
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>选择城市</Text>
              <TextInput 
                style={{flex: 1, textAlign: 'right', color: 'gray', fontSize: 14}} 
                editable={true}
                maxLength={40}
                onChangeText={(city) => this.setState({city})}
                value={this.state.city}
                />
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>选择县区</Text>
              <TextInput 
                style={{flex: 1, textAlign: 'right', color: 'gray', fontSize: 14}} 
                editable={true}
                maxLength={40}
                onChangeText={(district) => this.setState({district})}
                value={this.state.district}
                />
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <TextInput 
                style={{height: 80,flex: 1, textAlign: 'left', color: 'gray', fontSize: 14}} 
                editable={true}
                multiline={true}
                numberOfLines={4}
                onChangeText={(address) => this.setState({address})}
                value={this.state.address}
                />
            </View>
          </View>
          <View style={{width: '100%', backgroundColor: 'white'}}>
            <View style={{borderBottomWidth: 1, borderColor: '#f2f2f2',padding: 15, flexDirection: 'row', alignItems: 'space-between'}}>
              <Text style={{flex: 1}}>设为默认地址</Text>
              <TouchableOpacity
                onPress={() => this.setState({
                  _default: this.state._default ^ 1
                })}
              >
                <Image 
                  style={{width: 20, height: 20}}
                  source={this.state._default ? CHECKED : UN_CHECKED}/>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              backgroundColor: 'orange',
              borderRadius: 5,
              marginTop: 80,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={this._saveAddr.bind(this)}
          >
            <Text style={{fontSize: 20, color: 'white'}}>保存</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    justifyContent: 'center',
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
