import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../colors/colors';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Header extends React.Component {
  render() {
    return (

      <View style={styles.header}>
        <View style={styles.topLeftIcon}>
          <Icon name="md-qr-scanner" size={30} color={Colors.primary} />
        </View>

        <View style={styles.topViewHeaderCenter}>
          <Text style={styles.topCenterText}>R$ 100,00</Text>
        </View>

        <View>
          <Icon name="md-person-add" size={30} color={Colors.primary} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
  },
  topCenterText: {
    fontSize: 18,
    color: Colors.dark,
    fontWeight: 'bold'
  },
  topViewHeaderCenter: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});