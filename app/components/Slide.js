import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import ViewPager from 'react-native-viewpager'
// import Slide from '../../components/Slide'
export default class SlideComp extends Component {
  constructor(props) {
    super(props);  
    var dataSource = new ViewPager.DataSource({  
        pageHasChanged: (p1, p2) => p1 !== p2
    });  
    // 接受外部传入的banner资源
    let banner_images = this.props.banners;
    // 实际的DataSources存放在state中  
    this.state = {  
        dataSource: dataSource.cloneWithPages(banner_images)  
    }  
  }

  _renderPage(data, pageID) {  
      return (  
          <Image  
              source={data}  
              style={styles.page}/>  
      );  
  }  

  render() {
    return (
      <View style={styles.container}>  
        <ViewPager  
            style={{height:180}}  
            dataSource={this.state.dataSource}  
            renderPage={this._renderPage}  
            isLoop={true}  
            autoPlay={true}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
    container: {  
        height: 180,  
        flexDirection: 'row',  
        alignItems: 'flex-start',  
    },   
    page: {  
        flex: 1,  
        height: 180,  
        resizeMode: 'stretch'  
    }  
});  
