/**
 * 基于webview的
 *
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView
} from 'react-native';
import {html} from './canvas.js';
export default class WebCanvas extends Component {
  webview = {};
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      width: this.props.width
    }
  }

  messageHandler(e){
    console.log('e')
    console.dir(e.nativeEvent.data)
    this.webview.postMessage(e.nativeEvent.data)
  } 

  render() {
    var can_js = 'window._width='+this.state.width+';'
    can_js += 'window._height='+this.state.height+';';
    alert(can_js)
    return (
      <View style={styles.container}>  
        <WebView 
          style={{width:this.state.width, height:this.state.height}}
          ref = {(w) => {this.webview = w}}
          injectedJavaScript={can_js}
          source={{html: html}}
          onMessage={this.messageHandler.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
    container: {  
        flexDirection: 'row',  
        alignItems: 'flex-start',  
    }
});  
