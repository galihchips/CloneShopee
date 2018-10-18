import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right,Title , Item, Input, Separator, CardItem, Button } from 'native-base';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { fetchCart, getCart, deleteCart } from '../../actions/Cart';
import { fetchCourier } from '../../actions/Courier';

class Checkout extends Component {

  handleDelete(id){
    this.props.dispatch(deleteCart(id)).then(res =>{
      alert('Barang Berhasil Dikirim')
      this.props.navigation.popToTop()
    }).catch(err => {
      alert(err)
    })
  }

  componentDidMount(){
    this.props.dispatch(fetchCourier())
  }

  handleDelete(id){
    this.props.dispatch(deleteCart(id))
    alert('Barang Berhasil Dikirim')
    this.props.navigation.navigate('Homescreen')
  }

  render() {
    const carts = this.props.navigation.state.params
    
    return (
      <Container>
        <Header androidStatusBarColor="#000" style ={{backgroundColor : '#fff'}}>
                  <Left>
                    <AntDesignIcon
                    onPress = {() => this.props.navigation.goBack()} 
                    name = 'arrowleft' color = {'#FB5922'} size = {25} />
                  </Left>
                  <Body>
                    <Title style ={{color : '#000'}}>Checkout</Title>
                  </Body>
                  <Right />
                </Header>
        <Content>
          <View>
            <CardItem>
              <Left>
                <Image source = {{uri : carts[0].productId.imageUri[0] }} style ={{width : 80, height: 80}}/>
                <Body>
                  <Text>{carts[0].productId.name}</Text>
                  <Text>Rp{carts[0].productId.price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Text style ={{fontSize : 14, color : '#32ba7a'}}>Opsi pengiriman</Text>
            </CardItem>
            <TouchableOpacity onPress = {() => this.props.navigation.push('CourierScreen')}>
              <CardItem bordered>
                <Left style ={{flexDirection : 'column'}}>
                  <Text style ={{fontSize :14}}>JNE Reguler</Text>
                  <Text note style ={{fontSize :11}}>Diterima dalam 2-4 hari</Text>
                </Left>
                <Right>
                  <Text>Rp 27000</Text>
                </Right>
              </CardItem>
            </TouchableOpacity>
            <CardItem>
              <Left>
                <Text style ={{fontSize : 14}}>Total Pesanan (1 Produk)</Text>
              </Left>
              <Right>
                <Text style ={{color : '#FB5922'}}>Rp{carts[0].productId.price}</Text>
              </Right>
            </CardItem>
            <CardItem>
              
                <Left>
                  <Text note style ={{fontSize :11}}>Subtotal untuk Produk</Text>
                </Left>
                <Right>
                  <Text note style ={{fontSize :11}}>Subtotal Rp11000000</Text>
                </Right>
              
            </CardItem>
            <CardItem>
              
                <Left>
                  <Text note style ={{fontSize :11}}>Subtotal Pengiriman</Text>
                </Left>
                <Right>
                  <Text note style ={{fontSize :11}}>Rp27000</Text>
                </Right>
              
            </CardItem>
            <CardItem>
              
                <Left>
                  <Text style ={{fontSize : 14}}>Subtotal Total Pembayaran</Text>
                </Left>
                <Right>
                  <Text style ={{fontSize : 14}}>Rp11027000</Text>
                </Right>
              
            </CardItem>
          </View>
        </Content>
        <View>
          <Button 
          onPress = {() => this.handleDelete(carts[0]._id)}
          full style ={{backgroundColor: '#FB5922'}}>
            <Text>Buat Pesanan</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts : state.carts.carts
  }
}
export default connect(mapStateToProps)(Checkout)