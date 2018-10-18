import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Left, Body, Right,  Thumbnail, Title, Button, Content, Footer,Card,CardItem,List,ListItem } from 'native-base';

const {width} = Dimensions.get('window')
class DetailScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      modalVisible : false
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

 
  render() {
    const fashion = this.props.navigation.state.params;
    return (
      <Container>
        <Header androidStatusBarColor="#000" style ={styles.headerColor}>
            <Left>
              <Ionicon 
              onPress = {() => this.props.navigation.goBack()}
              name = 'ios-arrow-back' size = {25} color = {'#000'}/>
            </Left>
            <Body>
              <Title style ={styles.titleHeader}>{fashion.name}</Title>
            </Body>
            <Right>
                <AntDesignIcon 
                  style ={styles.iconShopping}
                  name = 'shoppingcart' size = {25}
                  color = '#FB5922' />
                <EntypoIcon 
                name = 'dots-three-vertical' 
                size = {25} 
                color = '#FB5922' />
            </Right>
          </Header>
          <Content>
            <View>
              <CardItem bordered>
                <View>
                  <Image
                  resizeMode = {'stretch'} 
                  style ={{width : width, height : 300, alignSelf : 'center'}}
                  source = {{ uri : fashion.imageUri}} />
                </View>
              </CardItem>
              <CardItem bordered>
                <View>
                  <Text>{fashion.name}</Text>
                </View>
              </CardItem>
              <CardItem>
                <Left>
                  <View>
                      <Button full style={{ backgroundColor: "#FB5922" }}>
                        <AntDesignIcon color = '#fff' active name="google" size = {15} style ={{margin : 10}}/>
                      </Button>
                  </View>
                  <View>
                      <Button bordered style={{backgroundColor : '#fff', borderColor :'#FB5922'}}>
                        <Text style ={{margin : 15,fontSize : 13, color : '#FB5922'}}>Beli ber-3</Text>
                      </Button>
                  </View>
                  </Left>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Text style ={{color : '#FB5922',textAlign : 'center', fontSize : 15}}>Rp {fashion.price}</Text>
                </Left>
              </CardItem>
              <ListItem icon
                onPress = {() => alert('Lihat')}
                >
                  <Body>
                    <Text style ={{fontSize : 13, color : '#666'}}>Koin Shopee</Text>
                  </Body>
                  <Right>
                    <Text style ={{fontSize : 13, color : '#666'}}>Dapatkan 15 Koin</Text>
                    <EntypoIcon name = 'chevron-thin-right' size = {17}/>
                  </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <MaterialCommunityIcon name = 'truck' size = {15} color = {'#aaa'} />
                </Left>
                <Body>
                  <Text style ={{fontSize : 14}}>Gratis ongkir dengan belanja min. Rp70.000 dari toko</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <MaterialCommunityIcon name = 'truck' size = {15} color = {'#aaa'} />
                </Left>
                <Body>
                  <Text style ={{fontSize : 14}}>Kirim ke Kota Jakarta Pusat</Text>
                  <Text style ={{fontSize : 14}}>Ongkos Kirim : Rp0 -Rp20.000</Text>
                </Body>
              </ListItem>
              <CardItem style ={{flex: 1}}>
                <Left style ={{flex: 1}} >
                  <Button
                          small
                          bordered
                          style = {styles.btnSuka}
                          >
                          <AntDesignIcon name = 'hearto' size = {15} style ={{margin : 15}}/>
                          <Text style={styles.txtSuka}>Suka</Text>
                  </Button>
                </Left>
                <Left style ={{flex: 1}} >
                  <Button
                          small
                          bordered
                          style = {styles.btnSuka}
                          >
                          <AntDesignIcon name = 'staro' size = {15} style ={{margin : 15}}/>
                          <Text style={styles.txtSuka}>Penilaian</Text>
                  </Button>
                </Left>
                <Right style ={{flex: 0.5}} >
                  <Button
                          small
                          bordered
                          style = {styles.btnSuka}
                          >
                    <AntDesignIcon name = 'sharealt' size = {15} style ={{margin : 15}}/>
                  </Button>
                </Right>
              </CardItem>
              <CardItem>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}>
                  <View>
                    <CardItem>
                      <Text>Hello World!</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                      </TouchableOpacity>
                    </CardItem>
                  </View>
                </Modal>
              </CardItem>
              <CardItem style ={{height : 100}}></CardItem>
            </View>
          </Content>
            <View style ={{backgroundColor : '#fff',flex : 1,flexDirection:'row',position : 'absolute',bottom : 0, alignSelf : 'center',width:width, height:50}}>
              <View style ={{flex: 0.5,alignSelf:'center',justifyContent : 'center',alignItems : 'center'}}>
                <AntDesignIcon
                  name = 'message1' 
                  size = {20} 
                  color = '#aaa' />
              </View>
                <View style ={{flex: 0.7, backgroundColor : 'pink',alignSelf:'center',justifyContent : 'center',alignItems : 'center'}}>
                  <Text style ={{color : '#fff'}}>Rp{fashion.price}</Text>
                  <Text note style ={{color : '#fff'}}>Harga Normal</Text>
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
  },
  btnSuka : {
    borderRadius:5,
    borderWidth: 1,
    borderColor : '#aaa',

  },
  txtSuka : {
    fontSize:13,
    color:'#aaa',
    textAlign : 'center',
    marginRight : 20
  },
});
export default DetailScreen;