import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');
import home from '../home/home';
import PandamallPage from '../pandamall/pandamall'
import Ucenter from '../ucenter/Ucenter'
var DATA = [
  {
    name: '首页',
    url: home
  },
  {
    name: '熊猫商城',
    url: PandamallPage
  },
  {
    name: '速办信用卡',
    url: false
  },
  {
    name: '便利生活',
    url: false
  },
  {
    name: '活动',
    url: false
  },
  {
    name: '个人中心',
    url: Ucenter
  },
];
export default class LeftSlide extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderList() {
    return CLASS_LIST.map(item => this._renderItem(item));
  }

  _gotoPage(msg) {
    if (!msg) return 
    this.props.navigator.push({
      component: msg,
      title: '熊猫商城',
      passProps: { navigator: this.props.navigator }
    })
  }



  render() {
    var img = require('../../asset/images/3x/shou28xxhdpi.png');
    return (
      /*  主体  */
      <View style={styles.container}>
        <View style={styles.leftTop}>
          <Image source={require('../../asset/images/images/mall-coin-7.png')} style={styles.headimg}/>
          <Text style={{paddingLeft: 15, flex:2}}>1111</Text>
          <Image source={require('../../asset/images/3x/ic_greyrigjtarrow.png')} style={{height: 10, marginRight: 15}}/>
        </View>
        <View style={{
            borderTopWidth: 1,
            borderColor: 'black',
            width: '100%',
            paddingTop: 5,
            height: 10
          }}>
          {
            DATA.map((val, key)=>{
              return (
                <TouchableOpacity style={{
                  height: 32, width: '100%',
                  justifyContent: 'center',
                  backgroundColor: key === this.props.index ? '#f2f2f2': 'white',
                  paddingLeft: 20
                }}
                onPress={() => this._gotoPage(val.url)}
                >
                  <Text style={[{fontSize: 14, color: key === this.props.index? '#aaa': 'black'}]}>{val.name}</Text>
                </TouchableOpacity>
                )
            })
          }
        </View>
        <Image 
          style={{position:'absolute', bottom: 0, width: '100%'}}
          source={require('../../asset/images/images/sidebar-bottom.png')}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderColor: '#f2f2f2',
    flexDirection: 'column'
  },
  signal: {
    width: Math.floor(width/4),
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
  descText: {
    position:'absolute',
    top: 0,
    right: 0,
    paddingLeft:5,
    paddingRight:5,
    height: 14,
    borderRadius: 10,
    backgroundColor: 'orange'
  },
  headimg: {
    width:70,
    height: 70,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#add8e6',
    borderRadius: 35
  },
  leftTop: {
    paddingTop: 40,paddingLeft:20,
    width: '100%',flexDirection: 'row',
    alignItems: 'center', justifyContent:'flex-start',
    backgroundColor: 'white',paddingBottom: 10,
    borderBottomWidth: 2, borderColor: 'black',
    marginBottom: 1
  }
});
