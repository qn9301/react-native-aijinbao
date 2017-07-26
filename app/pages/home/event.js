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
const DATA = [
  {
    "active_title":"信用卡",
    "active_tip":"立即申请，最快当日启用",
    "active_url":"credit_card.html",
    "active_img":require('../../asset/images/3x/img_banner_remaix.png'),
    "active_label":"生活特惠",
    "active_intro":"美团外卖立减10元，美团团购立减20元！"
  },
  {
    "active_title":"赛事",
    "active_tip":"阿里体育&呈枫文化",
    "active_url":"ali-active-sel.html",
    "active_img":require('../../asset/images/3x/img_banner_xinpinx.png'),
    "active_label":"线上行走",
    "active_intro":"阿里体育行走计划之踏青行动-Keep Walking!"
  }
];
export default class EventPage extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA),
    };
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
      var p_width = width - 30;
      return (
        <TouchableHighlight style={{paddingLeft: 15,marginTop: 10, paddingRight: 15, width: width, backgroundColor: 'white'}}>
          <View style={{flexDirection:'column'}}>
            <View style={{borderLeftWidth: 3,paddingLeft: 5, borderColor: 'orange',marginTop: 10,marginBottom: 10, flexDirection:'row'}}>
              <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
              <Text>{rowData.active_title}</Text>
              <Text style={styles.smallFont}>{rowData.active_tip}</Text>
              </View>
              <Text style={{color: 'orange'}}>MORE</Text>
            </View>
            <View style={{height: 564 / 960 * p_width}}>
              <Image 
                source={rowData.active_img}
                style={{width: p_width, height: 564 / 960 * p_width, resizeMode: 'cover'}}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
              <View style={{paddingTop: 2, paddingBottom: 2, 
                paddingLeft: 8,paddingRight: 8,backgroundColor: '#ff9500',
                borderRadius: 15}}>
                <Text style={{fontSize:12, color: 'white'}}>{rowData.active_label}</Text>
              </View>
              <Text style={styles.smallFont}>{rowData.active_intro}</Text>
            </View>
          </View>
        </TouchableHighlight>
        )
  }

  render() {
    return (
      /*  主体  */
      <ListView style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
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
