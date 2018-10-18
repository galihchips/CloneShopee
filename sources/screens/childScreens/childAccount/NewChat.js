import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';

class NewChat extends Component {
	render() {
		return (
				<View style = {styles.viewParent}>
		            <View style ={styles.viewChildComp}>
		                  <View style = {styles.viewChild}>
		                    <Image 
		                      source = {require('../../../image/chat.png')}
		                      style={styles.image}
		                    />

		                    <Text
		                      style={styles.textBody}>
		                      Anda telah menjadi pengguna dan ingin melihat Chat ?
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
			)
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
    marginRight : 20
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

export default withNavigation(NewChat);