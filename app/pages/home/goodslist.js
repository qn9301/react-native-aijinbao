import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ListView,
  View
} from 'react-native';
var {height, width} = Dimensions.get('window');
const DATA = {
    "mall_title":"商城",
    "mall_url":"products.html",
    "mall_tip":"最热贵金属纪念币收藏",
    "mall_img":require('../../asset/images/3x/img_banner_remaix.png'),
    "mall_rec":[
      {
        "mall_pro_img":require('../../asset/images/mall_coin_1.png'),
        "mall_pro_label":"NEW",
        "mall_pro_title":"2017年熊猫银币30g",
        "mall_pro_price":"258.00",
        "mall_pro_link":"product_detail.html"
      },
      {
        "mall_pro_img":require('../../asset/images/mall_coin_2.png'),
        "mall_pro_label":"NEW",
        "mall_pro_title":"2017年熊猫银币30g",
        "mall_pro_price":"258.00",
        "mall_pro_link":"product_detail.html"
      },
      {
        "mall_pro_img":require('../../asset/images/mall_coin_3.png'),
        "mall_pro_label":"NEW",
        "mall_pro_title":"2017年熊猫银币30g",
        "mall_pro_price":"258.00",
        "mall_pro_link":"product_detail.html"
      }
    ]
  };
export default class GoodsListPage extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA.mall_rec)
    }
  }

  _renderSquare(height){
    return (
        <View style={{position:'absolute', width:10, height: 10,
            backgroundColor: 'white', transform: [{rotate: '45deg'}],
            left: height/2 - 5,bottom: -5}}></View>
      );
  }

  _renderGoods(rowData){
    var g_width = Math.floor((width - 50) / 3)
    return (
        <TouchableHighlight style={{width:g_width, margin:5,flex:1}}>
          <View style={{flexDirection:'column',alignItems:'center', justifyContent: 'center'}}>
            <Image source={rowData.mall_pro_img} style={{height: 80, resizeMode: 'contain'}}/>
            <Text style={{fontSize: 10, color: "grey"}}>{rowData.mall_pro_title}</Text>
            <Text style={{fontSize: 12, paddingTop: 5}}>￥{rowData.mall_pro_price}</Text>
          </View>
        </TouchableHighlight>
      );
  }

  render() {
    var p_width = width - 30;
    return (
      /*  主体  */
      <View>
        <TouchableHighlight style={{paddingLeft: 15,marginTop: 10, paddingRight: 15, width: width, backgroundColor: 'white'}}>
          <View style={{flexDirection:'column'}}>
            <View style={{borderLeftWidth: 3,paddingLeft: 5, borderColor: 'orange',marginTop: 10,marginBottom: 10, flexDirection:'row'}}>
              <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
              <Text>{DATA.mall_title}</Text>
              <Text style={styles.smallFont}>{DATA.mall_tip}</Text>
              </View>
              <Text style={{color: 'orange'}}>MORE</Text>
            </View>
            <View style={{height: 564 / 960 * p_width, overflow: 'hidden'}}>
              <Image 
                source={DATA.mall_img}
                style={{width: p_width, height: 564 / 960 * p_width, resizeMode: 'cover'}}
                />
              {this._renderSquare(p_width)}
            </View>
          </View>
        </TouchableHighlight>
        <View style={{flexDirection: 'row', padding: 10, backgroundColor:'white'}}>
          <ListView 
              horizontal={true}
              dataSource={this.state.dataSource}
              renderRow={this._renderGoods.bind(this)}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  smallFont: {
    fontSize: 10,
    paddingLeft: 5,
    color: 'grey'
  }
});
