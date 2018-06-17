import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


import Colors from '../colors/colors';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.viewTitlesTab}>
        <View style={styles.viewLeftTitle}>
          <Text style={styles.titlesTab}>Atividades</Text>
        </View>

        <View style={styles.viewRightTitle}>
          <Text style={[styles.titlesTab, styles.m10]}>Todas</Text>
          <Text style={styles.titlesTab}>Minhas</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewTitlesTab: {
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  viewRightTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titlesTab: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grayDark
  },
  m10: {
    marginRight: 15,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  }
});