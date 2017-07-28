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

  render() {
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
          <View style={{flexDirection: 'row', height: 80, borderColor: 'orange',
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
          </View>
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
    // flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
    // backgroundColor: 'green'
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
