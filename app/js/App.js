
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Navigator,
  AsyncStorage,
  Alert
} from 'react-native';

import Storage from 'react-native-storage';


import GuideContainer from '../containers/GuideContainer'

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
})  
global.storage = storage;

  // storage.getAllDataForKey('key').then(value => {
  //    isFirst = value;
  //    Alert.alert(value)
  // });
  // isFirst = false
  //  storage.remove({
  //   key: 'isGuide'
  // });

  
  // var isFirst = '';
  // global.isFirst = isFirst
  storage.load({
    key: 'isGuide'

  }).then(ret => {
      // Alert.alert(ret.isShow)
     
  });

   

export default class App extends Component {

  render() {
    return (
        <View style={styles.container}>
          <StatusBar
           animated={true}
           hidden={true}
           backgroundColor="#E7FBFD"
           barStyle="light-content"
         />
          <Navigator 
                //初始化的参数
                initialRoute={{ params: {name:'首页'}, component:GuideContainer }}
               //场景过渡效果
                configureScene={(route) => {
                  return Navigator.SceneConfigs.PushFromRight;
                }}
                //渲染初始页面
                renderScene={(route, navigator) => {
                  let DefaultComponent = route.component;
                  return <DefaultComponent {...route.params} navigator={navigator} />
          }} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#F5FCFF'
  }
});

