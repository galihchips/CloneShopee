import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList,TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Container, Header, Button, Content, Tab, Tabs, Left, Body, Right, Title, Text, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { fetchCart, getCart, deleteCart } from '../../actions/Cart';

class CartScreen extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      jumlah : 1
    };
  }
  componentWillMount(){
    return (
        <View style = {{flex:1,flexDirection:'column',backgroundColor : '#F6F6F6'}}>
            <View style ={{flex:1,flexDirection:'column',alignSelf:'center',justifyContent: 'center',alignItems:'center'}}>
                  <ActivityIndicator size = 'large' color = '#aaa'/>
          </View>
        </View>
      )
  }

  componentDidMount(){
    this.props.dispatch(fetchCart())
  }

  handleAdd(){
    this.setState({
      jumlah : this.state.jumlah + 1  
    })
  }

  handleRemove(){
    this.setState({
      jumlah : this.state.jumlah - 1
    })
  }

  handleDelete(id){
    this.props.dispatch(deleteCart(id))
  }
  _renderItem(item){
  return (
          <View>
            <CardItem>
              <Left>
                <Image 
                  source = {{uri : item.productId.imageUri[0]}} 
                  style = {{width : 80, height : 80}} />
                <Body>
                  <View>
                    <Text style ={{fontSize : 13, color : '#aaa'}}>{item.productId.name}</Text>
                  </View>
                  <View style ={{flexDirection:'row', width : '100%', margin : 20}}>
                    
                      <Left>
                          <Ionicon 
                          onPress = {() => this.handleRemove()}
                          name = 'ios-remove' size ={25} color = {'#000'} />
                      </Left>
                    
                    <Body>
                      <Text>{this.state.jumlah}</Text>
                    </Body>
                    
                    
                      <Right>
                       
                          <Ionicon
                          onPress = {() => this.handleAdd()}
                          name = 'ios-add' size = {25} color = {'#000'} />
                        
                      </Right>
                  </View>
                  <View>
                    <Text style = {{fontSize : 13, color : 'orange'}}>Rp{item.productId.price}</Text>
                  </View>
                </Body>                    
              </Left>
              <Right> 
                <Ionicon 
                onPress = {() => Alert.alert(
                                  '',
                                  'Yakin ingin menghapus',
                                  [
                                    {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
                                    {text: 'YES', onPress: () => this.handleDelete(item._id)},
                                  ]
                                )}
                name = 'md-trash' size = {25} color = {'#aaa'}/>
              </Right>
            </CardItem>
          </View>
    )
  }

	render(){
    console.log(this.props.carts)
		return (
				<Container>
					<Header androidStatusBarColor="#000" style ={{backgroundColor : '#fff'}}>
			            <Left>
			              <AntDesignIcon
			              onPress = {() => this.props.navigation.goBack()} 
			              name = 'arrowleft' color = {'#FB5922'} size = {25} />
			            </Left>
			            <Body>
			              <Title style ={{color : '#000'}}>Keranjangku</Title>
			            </Body>
			            <Right>
			                <AntDesignIcon
				                name = 'message1' 
				                size = {25} 
				                color = '#FB5922' />
			            </Right>
			          </Header>
    					  <View style = {styles.viewParent}>
                      {this.props.carts.length > 0 ?
                        <View>
                          <View style ={{flexDirection : 'row', backgroundColor : '#32ba7a', height : 50}}>
                            <View style ={{alignSelf:'center', marginLeft : 10}}>
                              <Text style ={{fontSize : 13, color : '#fff', textAlign : 'center'}}>Gunakan Voucher Gratis Ongkir saat check-out Cek S&K</Text>
                            </View>
                          </View>
        				            <View>
                              <FlatList
                                extraData = {this.state}
                                keyExtractor={(item, index) => index.toString()}             
                                renderItem={({item}) => this._renderItem(item)}
                                data = {this.props.carts}
                              />
                              </View>
                            <View style ={{width : '100%',bottom : 0 , position:'relative',backgroundColor : '#fff'}}>
                              <View style ={{marginTop: 330}}>
                                <CardItem style ={{backgroundColor : '#fff'}}>
                                  
                                    <Left>
                                      <Text>Subtotal : {this.props.carts[0].productId.price}</Text>
                                    </Left>
                                  <Right>
                                    <Button
                                      onPress = {() => this.props.navigation.push('CheckoutScreen', this.props.carts)}
                                      full
                                      style = {styles.btnRegister}
                                      >
                                          <Text style={styles.txtRegister}>Checkout</Text>
                                      </Button>
                                  </Right>
                                </CardItem>
                              </View>
                            </View>
                        </View>
                        
                        :
                        <View style = {styles.viewParent}>
                          <View style ={styles.viewChildComp}>
                                  <View style = {styles.viewChild}>
                                    <Image 
                                      source = {require('../../image/notiflogin.png')}
                                      style={styles.image}
                                    />

                                    <Text
                                      style={styles.textBody}>
                                      Keranjang belanja anda Kosong sekarang
                                    </Text>
                                  </View>
                                  <View style={styles.anotherViewChild}>
                                      <Button
                                      onPress = {() => this.props.navigation.navigate('Homescreen')}
                                      bordered
                                      style = {styles.btnLoginRegister}
                                      >
                                          <Text style={styles.txtLoginRegister}>Belanja Sekarang</Text>
                                      </Button>
                                  </View>
                          </View>
                        </View>
                      }
    				        </View>
				</Container>

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
    backgroundColor : '#FFF',

  },
  viewChildComp : {
    marginTop : 70,
    flexDirection:'column',
    alignSelf:'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  viewChild : {
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
  btnRegister : {
    borderRadius:5,
    backgroundColor : '#FB5922',
    borderColor : '#fff',
    marginRight : 10
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

const mapStateToProps = (state) => {
  return {
    carts : state.carts.carts
  }
}
export default connect(mapStateToProps)(CartScreen)