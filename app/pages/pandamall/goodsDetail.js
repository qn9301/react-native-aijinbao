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
import OrderPage from '../order/Order'
var top_list = []
const BANNER_IMGS = [  
    require('../../asset/images/banner1.png'),  
    require('../../asset/images/banner2.png'),  
    require('../../asset/images/banner3.png')
];
export default class GoodsDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '1',
      webviewHeight: 0
    }
  }

  componentWillMount() {
  }

  _inputNum(num) {
    console.log(num)
  }

  _incNum() {
    var now_num = parseInt(this.state.num)
    if (!(now_num > 0)) {
      now_num = 0
    }
    this.setState({num: "" + ++now_num})
  }

  _decNum() {
    var now_num = parseInt(this.state.num)
    if (!(now_num > 2)) {
      now_num = 2
    }
    this.setState({num: "" + --now_num})
  }

  _dealwebview(e){
    if (e.jsEvaluationValue){
      this.setState({webviewHeight: parseInt(e.jsEvaluationValue.substr(1))})
    }
  } 

  _gotoOrder(){
    this.props.navigator.push({
      component: OrderPage,
      title: '订单详情',
      passProps: { navigator: this.props.navigator, goodsId: this.props.goodsId, num: this.state.num,title: '订单详情'}
    })
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
          <SlideComp banners={BANNER_IMGS}/>
          <View style={{backgroundColor: 'white', marginBottom: 10}}>
            <View style={{
                  flexDirection: 'row', 
                  height: 50, 
                  paddingTop: 30,
                  paddingLeft: 10,
                  marginBottom: 20,
                  width: '100%'}}>
              <View style={{flex: 8 }}>
                <Text>14k注金小鹿吊坠</Text>
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{width: 20, height:20, resizeMode: 'contain'}}
                  source={require('../../asset/images/3x/ic_shoucang_li.png')}/>
              </View>
              <View style={{flex: 1}}>
                <Image 
                  style={{width: 20, height:20, resizeMode: 'contain'}}
                  source={require('../../asset/images/3x/ic_fenxiangx.png')}/>
              </View>
            </View>
            <View style={{
                  paddingLeft: 10, 
                  borderBottomWidth: 1,
                  borderColor: '#f2f2f2',
                  paddingBottom: 20,
                  width: width
                }}>
              <Text style={{fontSize: 20}}>￥420.00</Text>
            </View>
            <View style={{flexDirection: 'row', 
                  paddingTop:10, 
                  paddingBottom:10}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image 
                    style={{width: 12, height: 12, resizeMode: 'contain'}}
                    source={require('../../asset/images/3x/cf.png')}/>
                  <Text style={{color: '#aaa', fontSize: 12}}> 100%正品保证</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image 
                    style={{width: 12, height: 12, resizeMode: 'contain'}}
                    source={require('../../asset/images/3x/cf.png')}/>
                  <Text style={{color: '#aaa', fontSize: 12}}>配有证书</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Image 
                    style={{width: 12, height: 12, resizeMode: 'contain'}}
                    source={require('../../asset/images/3x/cf.png')}/>
                  <Text style={{color: '#aaa', fontSize: 12}}>呈枫发货</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{width: width, backgroundColor: 'white', marginBottom:10}}>
            <View style={{
                width: '100%', 
                borderBottomWidth:1,
                borderColor:'#f2f2f2',
                flexDirection: 'row',
                height: 50
              }}>
              <View style={{flex: 1, flexDirection: 'row',width: width, alignItems: 'center'}}>
                <Text style={{paddingLeft: 10, flex: 1}}>选择数量</Text>
                <View style={{flexDirection: 'row', marginRight: 20, borderWidth: 1, borderColor: '#e6e6e6'}}>
                  <TouchableOpacity 
                        style={{
                          borderRightWidth:1,
                          width: 25,
                          borderColor: "#e6e6e6",
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onPress={this._decNum.bind(this)}
                  >
                    <Text style={{fontSize: 20}}>-</Text>
                  </TouchableOpacity>
                  <TextInput style={{
                        width: 50, 
                        height: 25,
                        paddingLeft: 5,
                        paddingRight: 5,
                        textAlign: 'center'
                      }} 
                      value={this.state.num}
                      keyboardType='numeric'/>
                  <TouchableOpacity
                        style={{
                          width: 25,
                          borderLeftWidth:1,
                          borderColor: "#e6e6e6",
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        onPress={this._incNum.bind(this)}
                  >
                    <Text style={{fontSize: 20}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{
                  flexDirection: 'row', 
                  paddingTop:10, 
                  paddingBottom:10
                }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#aaa', fontSize: 12}}>快递</Text>
                  <Text style={styles.orange}>￥0.00</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#aaa', fontSize: 12}}>库存</Text>
                  <Text style={styles.orange}>999</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#aaa', fontSize: 12}}>评论</Text>
                  <Text style={styles.orange}>0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
                width: width, 
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderColor: '#f2f2f2'
              }}>
            <View style={{
                width: '100%', 
                height: 50, 
                paddingLeft: 10,
                justifyContent:'center'}}>
              <Text>商品详情</Text>
            </View>
            <WebView 
                ref='webview'
                style={{
                  width: '100%',
                  height: this.state.webviewHeight
                }} 
                injectedJavaScript={`
                    var height = document.body.clientHeight;
                    window.location.hash = '#' + height;
                  `}
                onNavigationStateChange={this._dealwebview.bind(this)}
                scalesPageToFit={false}
                source={{uri:'https://www.baidu.com'}} 
              />
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
          <View style={{flex: 2,
                backgroundColor: 'white',justifyContent: 'center'}}>
            <TouchableOpacity style={{justifyContent: 'center', position:'relative', width: 60}}>
              <Image 
                  source={require('../../asset/images/3x/ic_cartx.png')}
                  style={{width: 20, height: 20, 
                      resizeMode: 'contain', marginLeft: 20}}
                />
              <View style={{
                      padding:5,paddingTop:1, paddingBottom:1, 
                      position: 'absolute', 
                      right: 10, top: -5,
                      backgroundColor: 'orange',
                      borderRadius: 10}}>
                <Text style={{fontSize: 10, color: 'white'}}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'orange', 
                      alignItems:'center', justifyContent: 'center'}}
                  onPress={this._gotoOrder.bind(this)}
                >
            <Text style={{fontSize: 15, color: 'white', fontWeight: '700'}}>立即购买</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'black', 
                      alignItems:'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: '700'}}>加入购物车</Text>
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
  }
});
