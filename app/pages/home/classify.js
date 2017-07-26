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
import PandamallPage from '../pandamall/pandamall'
const CLASS_LIST = [
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou28xxhdpi.png'), title:'熊猫商城', desc: '热卖'},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou29xxhdpi.png'), title:'闪电理财', desc: ''},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou30xxhdpi.png'), title:'速办信用卡', desc: '浦发'},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou31xxhdpi.png'), title:'便利生活', desc: ''},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou32xxhdpi.png'), title:'赛事', desc: '父亲节'},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou33xxhdpi.png'), title:'保险', desc: ''},
  {'url': PandamallPage,'icon': require('../../asset/images/3x/shou34xxhdpi.png'), title:'个人中心', desc: ''},
];
export default class ClassifyPage extends Component {

  constructor(props) {
    super(props);
    const datas = this.props.datas;
    this.state = {};
  }

  _renderList() {
    return CLASS_LIST.map(item => this._renderItem(item));
  }

  _gotoPage(msg) {
    this.props.navigator.push({
      component: msg,
      title: '熊猫商城',
      passProps: { navigator: this.props.navigator }
    })
  }

  _renderItem(data) {
      return (
        <TouchableOpacity onPress={() => this._gotoPage(data.url)} style={{paddingTop: 10}}>
          <View style={styles.signal}>
            <Image source={data.icon} style={{resizeMode:'contain', height:15}}/> 
            <Text style={{fontSize: 13, color: '#666', paddingTop:5}}>{data.title}</Text>
            {data.desc ? 
            <View style={styles.descText}>
              <Text style={{fontSize: 10, color: 'white', paddingTop:2}}>{data.desc}</Text>
            </View> : <View></View>
            }
          </View>
        </TouchableOpacity>)
  }

  render() {
    var img = require('../../asset/images/3x/shou28xxhdpi.png');
    return (
      /*  主体  */
      <View style={styles.container}>
      {this._renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white'

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
  }
});
