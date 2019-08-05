import React, { Component } from 'react';
 
import { View, Image, TouchableOpacity } from 'react-native';
import NavigationService from '../navigation/NavigationService';
 
export default class ActionBarImage extends Component {

  _navigateToHistory = () => {
    NavigationService.navigate('History');
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress = {() => this._navigateToHistory()} >
          <Image
            source={require('../assets/images/other/user.png')}

            style={{
              width: 35,
              height: 35,
              borderRadius: 10,
              margin: 15,
              marginRight: 18,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}