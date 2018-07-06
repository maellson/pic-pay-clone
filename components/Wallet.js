import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../colors/colors';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.mainWallet}>
        <View style={styles.headerWallet}>
          
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.textNormal, styles.whiteColor]}>Meu saldo</Text>
            <Text style={[styles.myMoney, styles.whiteColor]}>R$ 0,00</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 40}}>
            <TouchableHighlight style={styles.btn} onPress={() => console.log('Adicionar')}>
              <View style={styles.btnIconText}>
                <Icon name="ios-add" size={20} color={Colors.light} />
                <Text style={[styles.btnText, styles.whiteColor]}>Adicionar</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight style={[styles.btn, styles.marginLeftBtn]} onPress={() => console.log('Retirar')}>
              <View style={styles.btnIconText}>
                <Icon name="ios-remove" size={20} color={Colors.light} />
                <Text style={[styles.btnText, styles.whiteColor]}>Retirar</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainWallet: {
    flex: 1
  },
  headerWallet: {
    height: 280,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textNormal: {
    fontSize: 16,
  },
  myMoney: {
    marginBottom: 10,
    fontSize: 60,
    fontWeight: '100',
  },
  whiteColor: {
    color: Colors.light
  },
  btnText: {
    fontSize: 17,
    marginLeft: 10,
  },
  btn: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 50,
    width: '50%'
  },
  btnIconText: {
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginLeftBtn: {
    marginLeft: 20,
  }
});