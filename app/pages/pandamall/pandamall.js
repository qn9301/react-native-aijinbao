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
  TextInput
} from 'react-native';
var {height, width} = Dimensions.get('window');
import GoodsDetailPage from './goodsDetail';
var top_list = [
        {name: "默认", 'checked': 1},
        {name: "销量", 'checked': 0},
        {name: "新品", 'checked': 0},
        {name: "价格", 'checked': 0}]
export default class PandamallPage extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let ts = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
                    dataSource: ds,
                    typeList: ts.cloneWithRows(top_list),
                    isloading: false
                  }
  }

  componentDidMount() {
    this._requestData()
  }

  _requestData() {
    var url = 'http://www.test.com/aijinbao/json/pro_index.json';
    var data = fetch(url).then((response) => {  
        if (response.ok) {  
            return response.json();
        }  
      }).then((json) => {  
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(json.data.pro_list)
        });
      }).catch((error) => {  
        console.error(error);  
      });  
  }

  _goback() {
    this.props.navigator.pop()
  }

  _gotoPage(id) {
    this.props.navigator.push({
      component: GoodsDetailPage,
      title: '商品详情',
      passProps: { navigator: this.props.navigator, goodsId: id ,title: '商品详情'}
    })
  }

  _renderGoods(rowData, section_id, row_id) {
    var p_width = (width - 10) / 2 - 15
    console.log('渲染产品')
    return (
        <TouchableOpacity style={{width: p_width,marginBottom: 10}} 
            onPress={() => this._gotoPage(row_id)}
            >
          <Image source={{uri: rowData.img}} style={{width: p_width, height: p_width, backgroundColor: 'white'}}/>
          <View style={{padding:5, backgroundColor: 'white', width: p_width}}>
            <Text style={styles.title}>{rowData.title}</Text>
            <Text style={styles.info}>{rowData.info}</Text>
            <Text style={styles.price}>{rowData.price}</Text>
          </View>
        </TouchableOpacity>
      );
  }

  _renderType(rowData, section_id, row_id) {
    return (
          <TouchableOpacity style={styles.filterItem} onPress={()=>{this.changeType(row_id)}}>
            <Text style={{color: rowData.checked?'orange':'grey', fontWeight: '900'}}>{rowData.name}</Text>
            <View style={{backgroundColor: rowData.checked?'orange':'transparent', height: 2,width: 30,marginTop: 5}}></View>
          </TouchableOpacity>
      );
  }

  changeType(id) {
    var data = top_list;
    for (let i=0;i<data.length;i++) {
      data[i].checked = 0;
      if (i == id){
        data[i].checked = 1;
      }
    }
    let ts = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      typeList: ts.cloneWithRows(data)
    })
  }

  _refresh() {
    console.log('刷新页面')
    this.setState({isloading: true})
    setTimeout(()=>{this.setState({isloading: false});console.log('刷新完毕')}, 2000)
  }

  render() {
    return (
      /*  主体  */
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isloading}
            onRefresh={this._refresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />}
        >
        <View style={styles.top}>
          <View style={{flex:1, alignItems: 'center'}}>
            <TouchableOpacity onPress={this._goback.bind(this)}>
              <Image style={{height: 20, resizeMode: 'contain'}} source={require('../../asset/images/2x/ic_back.png')} />
            </TouchableOpacity>
          </View>
          <View style={[styles.searchInput, {flex:4, backgroundColor: '#f2f2f2'}]}>
            <TextInput
            style={{flex:1}}
                maxLength = {40}
                placeholder={'请输入要搜索的产品'}
              />
          </View>
          <View style={{flex:1, alignItems: 'center'}}>
            <Image style={{height: 20, resizeMode: 'contain'}} source={require('../../asset/images/2x/ic_cart.png')} />
          </View>
        </View>
        <View style={styles.filter}>
          <ListView 
              contentContainerStyle={styles.filter}
              dataSource={this.state.typeList}
              horizontal={true}
              renderRow={this._renderType.bind(this)}
            />
        </View>
        <View style={styles.goodsList}>
          <ListView 
              contentContainerStyle={styles.dataList}
              dataSource={this.state.dataSource}
              renderRow={this._renderGoods.bind(this)}
            />
        </View>
      </ScrollView>
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
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    backgroundColor: 'white'
  },
  back: {
    fontSize: 30,
    paddingLeft: 15,
    color: 'gray'
  },
  searchInput: {
    height: 25,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 15
  },
  filter: {
    height: 35, 
    width: width,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  filterItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goodsList: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    paddingTop: 10,
    width: width
  },
  dataList: {
    justifyContent: 'space-around',    
    flexDirection: 'row',    
    flexWrap: 'wrap' 
  },
  title: {
    fontSize: 12,
    overflow: 'hidden'
  },
  info: {
    fontSize: 10,
    marginTop: 3,
    marginBottom:3,
    color: 'grey',
    overflow: 'hidden'
  },
  price: {
    fontSize: 12,
    color: 'orange',
    overflow: 'hidden'
  }
});
