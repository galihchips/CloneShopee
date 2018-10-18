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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right,  Thumbnail, Title, Button, Content,ListItem,Separator } from 'native-base';

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
                <TouchableOpacity onPress ={() => this.props.navigation.push('CartScreen')}>
                <FeatherIcon
                  style ={styles.iconShopping}
                  name = 'shopping-cart' size = {25}
                  color = '#FB5922' />
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => this.props.navigation.push('ChatLoginScreen')}>
                <AntDesignIcon
                name = 'message1' 
                size = {25} 
                color = '#FB5922' />
              </TouchableOpacity>
            </Right>
          </Header>
          <Content>
            <View>
              <Separator bordered>
              </Separator>
              <ListItem icon>
                      <Left>
                        <Button rounded  style ={{ backgroundColor: "#d8115a"}}>
                          <FontAwesomeIcon color = '#fff' name="ticket" size = {20} />
                        </Button>
                      </Left>
                      <Body>
                        <Text style ={{fontSize : 13, color : '#666'}}>Penawaran Khusus</Text>
                        <Text note>Lihat Selengkapnya</Text>
                      </Body>
                      
                    </ListItem>
                    <ListItem icon
                    onPress = {() => alert('Lihat')}
                    >
                      <Left>
                        <Button rounded  style ={{ backgroundColor: "#efca10"}}>
                          <FontAwesomeIcon color = '#fff' active name="bell-o" size = {20} />
                        </Button>
                      </Left>
                      <Body>
                        <Text style ={{fontSize : 13, color : '#666'}}>Aktifitas</Text>
                        <Text note>Lihat Selengkapnya</Text>
                      </Body>
                      
                    </ListItem>
                    <ListItem icon
                    onPress = {() => alert('Lihat')}
                    >
                      <Left>
                        <Button rounded  style ={{ backgroundColor: "#e2320b"}}>
                          <SimpleLineIcon color = '#fff' active name="handbag" size = {20} />
                        </Button>
                      </Left>
                      <Body>
                        <Text style ={{fontSize : 13, color : '#666'}}>Update Shopee</Text>
                        <Text note>Lihat Selengkapnya</Text>
                      </Body>
                      
                    </ListItem>
            </View>
            <Separator bordered>
              <Text>Update Pesanan</Text>
            </Separator>
            <View style = {styles.viewParent}>
              
              <View style ={styles.viewChildComp}>
                    <View style = {styles.viewChild}>
                      <Image 
                        source = {require('../../image/notiflogin.png')}
                        style={styles.image}
                      />

                      <Text
                        style={styles.textBody}>
                        Tidak ada pesanan
                      </Text>
                    </View>
                    <View style={styles.anotherViewChild}>
                        <Button
                        bordered
                        style = {styles.btnLoginRegister}
                        >
                            <Text style={styles.txtLoginRegister}>Belanja Sekarang</Text>
                        </Button>
                    </View>
            </View>
        </View>
        </Content>
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
    marginRight : 20
  },
  viewParent : {
    flex:1,
    flexDirection:'column',
    backgroundColor : '#FFF'
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
    marginTop: 30,
    height: 100,
    width: 100
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