import React from 'react';
import {View, Text} from 'react-native';

import colors from '../colors/colors';


export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text style={{color: colors.primary}}>Alex</Text>
      </View>
    );
  }
}