import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  Item,
  TouchableOpacity
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right,  Thumbnail, Title, Button, Content, Footer, ListItem } from 'native-base';
import Swiper from 'react-native-swiper';

import { getProduct } from '../../actions/Products';

const {width} = Dimensions.get('window')

class DetailScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data : this.props.navigation.state.params,
      imageSlider : [],
      details : [],
      
    };
  }
   _renderItem(item){
  return (
          <View>
            <ListItem>
              <Left>
                <Text>Category</Text>
              </Left>
              <Body style ={{borderLeftWidth:0.5}}>
                <Text style ={{textAlign :'center'}}>{item.category}</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Made In</Text>
              </Left>
              <Body style ={{borderLeftWidth:0.5}}>
                <Text style ={{textAlign :'center'}}>{item.from}</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Item Type</Text>
              </Left>
              <Body style ={{borderLeftWidth:0.5}}>
                <Text style ={{textAlign :'center'}}>{item.ingredients}</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Merk</Text>
              </Left>
              <Body style ={{borderLeftWidth:0.5}}>
                <Text style ={{textAlign :'center'}}>{item.merk}</Text>
              </Body>
            </ListItem>
          </View>
    )
  }
  componentDidMount(){
    this.setState({
      imageSlider : this.state.data.imageUri,
      details: this.state.data.detail
    })
  }

  render() {
    console.log(this.props.navigation.state.params)
    const product = this.props.navigation.state.params;
    return (
      <Container>
        <Header androidStatusBarColor="#000" style ={styles.headerColor}>
            <Left />
            <Body>
              <Title style ={styles.titleHeader}>{product.name}</Title>
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
            <Swiper
                  activeDotColor="#FB5922"
                  height={300}
                >
                {
                  this.state.imageSlider.map((item, i) => 
                    <View item = {item} key ={i} style ={{width : '80%'}}>
                      <Image style = {styles.swiperImage} source ={{uri : item}} key ={i} />
                    </View>)
                } 
            </Swiper>
            <View>
              <ListItem>
                <Left>
                  <Text>Rincian Produk</Text>
                </Left>
             </ListItem>
             <View>
               <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => this._renderItem(item)}
                  data = {this.state.details}
                />
             </View>
            </View>
          </Content>
          <View style ={{backgroundColor : '#fff',flex : 1,flexDirection:'row',position : 'absolute',bottom : 0, alignSelf : 'center',width:width, height:50}}>
              <View style ={{backgroundColor : '#39d36a',flex: 0.5,alignSelf:'center',justifyContent : 'center',alignItems : 'center'}}>
                <AntDesignIcon
                  style ={{marginTop:15,marginBottom:15,}}
                  name = 'message1' 
                  size = {20} 
                  color = '#fff' />
              </View>
              <View style ={{backgroundColor : '#39d36a',flex: 0.5,alignSelf:'center',justifyContent : 'center',alignItems : 'center'}}>
                <MaterialCommunityIcon
                  style ={{marginTop:15,marginBottom:15,}}
                  name = 'cart-plus' 
                  size = {20} 
                  color = '#fff' />
              </View>
              <TouchableOpacity onPress ={() => this.Cart()}>
                <View style ={{flex: 1,alignSelf:'center',justifyContent : 'center',alignItems : 'center', backgroundColor : '#FB5922'}}>
                  <Text style ={{textAlign : 'center',marginTop:15,marginBottom:15,color:'#fff'}}>Beli Sekarang</Text>
                </View>
              </TouchableOpacity>
            </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerColor :{
    backgroundColor : '#fff'
  },
  swiperImage :{
    width : width,
    resizeMode : 'stretch',
    height : 300
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
export default DetailScreen;