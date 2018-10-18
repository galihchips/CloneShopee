import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right,  Thumbnail, Title, Button, Content } from 'native-base';

export default class Notif extends Component {

  static navigationOptions = {
    header: null
  }

  Next = () => {
    this.props.navigation.push('AuthScreen');
  }
  
  render() {
    return (
      <Container>
          <Header androidStatusBarColor="#000" style ={styles.headerColor}>
            <Left />
            <Body>
              <Title style ={styles.titleHeader}>Notifikasi</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => Alert.alert(
                  'Login Untuk Melanjutkan',
                  'Silahkan register atau login untuk mengakses Keranjang Belanja',
                  [
                    {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
                    {text: 'YES', onPress: () => this.Next()},
                  ]
                )}>
                  <FeatherIcon                    
                    style ={styles.iconShopping}
                    name = 'shopping-cart' size = {25}
                    color = '#FB5922' />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Login Untuk Melanjutkan',
                  'Silahkan register atau login untuk mengakses pesan dan tawaran',
                  [
                    {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
                    {text: 'YES', onPress: () => this.Next()},
                  ]
                )}>
                  <AntDesignIcon
                  name = 'message1' 
                  size = {25} 
                  color = '#FB5922' />
              </TouchableOpacity>    
            </Right>
          </Header>
          <View style = {styles.viewParent}>
            <View style ={styles.viewChildComp}>
                  <View style = {styles.viewChild}>
                    <Image 
                      source = {require('../../image/notif.png')}
                      style={styles.image}
                    />

                    <Text
                      style={styles.textBody}>
                      Sudah terdaftar sebagai pengguna ?
                    </Text>
                  </View>
                  <View style={styles.anotherViewChild}>
                      <Button
                      onPress = {() => this.props.navigation.push('AuthScreen')}
                      bordered
                      style = {styles.btnLoginRegister}
                      >
                          <Text style={styles.txtLoginRegister}>LOGIN / REGISTER</Text>
                      </Button>
                  </View>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerColor :{
    backgroundColor : '#fff'
  },
  titleHeader : {
    color : '#000',
    fontSize : 15
  },
  iconShopping : {
    marginLeft : 30,
    marginRight : 20,
    borderWidth : 0.2
  },
  viewParent : {
    flex:1,
    flexDirection:'column',
    backgroundColor : '#F6F6F6'
  },
  viewChildComp : {
    flex:1,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  viewChild : {
    alignSelf:'center',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  image : {
    height: 60,
    width: 60
  },
  textBody :{
    fontSize :12,
    marginTop:20,
    color: '#aaa'
  },
  anotherViewChild :{
    paddingTop:20
  },
  btnLoginRegister :{
    borderRadius:5,
    borderWidth: 1,
    borderColor : '#aaa'
  },
  txtLoginRegister : {
    fontSize:13,
    color:'#444',
    textAlign : 'center',
    margin: 20
  }
});