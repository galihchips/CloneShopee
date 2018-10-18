import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Left, Body, Right,  Thumbnail, Title, Button, Content, Card, CardItem } from 'native-base';

import { fetchProducts, getProduct } from '../../actions/Products';
import { connect } from 'react-redux';

class Timeline extends Component {

  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  
    this.state = {
      products : this.props.products,
      likes : 57
    };
  }
  pressLike = () => {
    this.setState({
      likes : this.state.likes + 1
    })
  }
  Next = () => {
    this.props.navigation.push('AuthScreen');
  }
  _renderItem(item){
  return (

          <View style ={styles.viewChildList}>
          <Card> 
            <CardItem bordered>
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
              <TouchableOpacity onPress ={() => alert('Followed')}>
                <SimpleLineIcon 
                name = 'user-follow' size = {15} color = {'#FB5922'}/>
                </TouchableOpacity>
              </Right>
            </CardItem>
            <TouchableOpacity onPress = {() => this.props.navigation.push('DetailTimeline', (item))}>
              <CardItem bordered>
                <Image style ={styles.imageList} source = {{uri: item.imageUri[0]}} />
              </CardItem>
            </TouchableOpacity>
          </Card>
          </View>
    )
  }

  componentDidMount(){
    this.props.dispatch(fetchProducts()) 
  }

  Next = () => {
    this.props.navigation.push('AuthScreen');
  }

  render() {
    return (
      <Container>
          <Header androidStatusBarColor="#000" style ={styles.headerColor}>
            <Left>
              <SimpleLineIcon name = 'user-follow' size = {25} color = '#FB5922'/>
            </Left>
            <Body>
              <Title style ={styles.titleHeader}>Timeline</Title>
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
          <View style ={{flex : 1, flexDirection : 'row', backgroundColor : '#32ba7a', height : 100}}>
            <View style ={{flex :1, alignSelf:'center', marginLeft : 10}}>
              <Text style ={{fontSize : 16, color : 'yellow', textAlign : 'center'}}>Selamat Datang di Shopee</Text>
              <Text style ={{fontSize : 13, color : '#fff', textAlign : 'center'}}>Personalisasikan Timeline anda - ikuti lebih banyak teman dan penjual yang direkomendasikan</Text>
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => this._renderItem(item)}
              data = {this.props.products}
            />
          </View>
          </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerColor :{
    backgroundColor : '#fff',
    top : 0
  },
  titleHeader : {
    color : '#000',
    fontSize : 15
  },
  iconShopping : {
    marginLeft : 30,
    marginRight : 20
  },
  btnRegister : {
    borderRadius:2,
    borderColor : '#fff',
    marginRight : 10
  },
  txtRegister : {
    fontSize:13,
    color:'#fff',
    textAlign : 'center',
    margin: 20
  },
  viewChildList :{
    borderWidth:0.2,
    borderColor : '#aaa',
    flexDirection : 'row'
  },
  imageList :{
    width :120,
    height :120
  },
});

const mapStateToProps = (state) => {
  return{
    products : state.products.products
  }
}
export default connect(mapStateToProps)(Timeline);