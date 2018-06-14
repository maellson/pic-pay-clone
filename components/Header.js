import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../colors/colors';


export default class Header extends React.Component {
  render() {
    return (

      <View style={styles.header}>
        <Text>Alex</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100
  }
});