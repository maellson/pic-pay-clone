import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Colors from '../colors/colors';

import Icon from 'react-native-vector-icons/Ionicons';

const image = 'https://avatars0.githubusercontent.com/u/16847836?s=460&v=4';


class HeaderSettings extends React.Component {
  render() {
    return (
      <View style={styles.headerSettings}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.usuario}>@alexalannunes</Text>
        <Text style={styles.nome}>Alex Alan Nunes</Text>
        <Text style={styles.linkToProfile}>
          Ver meu perfil&nbsp;
          <Icon name='ios-arrow-forward' size={14} color={Colors.primary} />
        </Text>
      </View>
    )
  }
}

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.mainSettings}>
        <ScrollView>
          <HeaderSettings />

          <Text style={styles.title}>Minha conta</Text>

          <View style={styles.viewLinksToActions}>
            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Meu PicPay</Text>
              <Text style={styles.subTitlemenu}>@alexalannunes</Text>
            </View>

            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Meu número</Text>
              <Text style={styles.subTitlemenu}>(88) 99743 3204</Text>
            </View>

            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Meu e-mail</Text>
              <Text style={styles.subTitlemenu}>alexalannunes@gmail.com</Text>
            </View>

            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Dados pessoais</Text>
              <Text style={styles.subTitlemenu}>Nome, CPF e data de nascimento</Text>
            </View>


            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Conta Bancária</Text>
            </View>

            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Taxas e limites</Text>
            </View>

            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Meus endereços</Text>
            </View>
          </View>

          <Text style={styles.title}>Minhas assinaturas</Text>

          <View style={styles.viewLinksToActions}>
            <View style={styles.viewLnikMennuItem}>
              <Text style={styles.titleMenuItem}>Ver minhas assinaturas</Text>
            </View>
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainSettings: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  headerSettings: {
    flex:1 , 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    paddingVertical: 55,
    flexDirection: 'column',
  },
  usuario: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  nome: {
    color: Colors.grayDark,
    fontSize: 15,
    marginBottom: 5,
  },
  linkToProfile: {
    fontSize: 14,
    color: Colors.primary
  },
  viewLinksToActions: {
    backgroundColor: Colors.light,
  },
  viewLnikMennuItem: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius:100,
    borderColor: '#c8c8c8',
    borderWidth: 1,
    marginBottom: 10,
  },
  subTitlemenu: {
    color: Colors.grayDark,
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.primary,
    padding: 15
  }
})