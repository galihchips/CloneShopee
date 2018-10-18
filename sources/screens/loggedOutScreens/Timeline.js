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
import { fetchProducts } from '../../actions/Products';
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
  

  componentDidMount(){
    this.props.dispatch(fetchProducts()) 
  }

  Next = () => {
    this.props.navigation.push('AuthScreen');
  }

  _keyExtractor = (item, i) => item.id;

  _renderItem(item){
  return (
          <View key = {item.key} style ={styles.viewChildList}>
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

  render() {
    return (
      <Container>
          <Header androidStatusBarColor="#000" style ={styles.headerColor}>
            <Left>
              <TouchableOpacity onPress = {() => Alert.alert(
                  'Login Untuk Melanjutkan',
                  'Silahkan register atau login untuk mengikuti Penjual',
                  [
                    {text: 'NO', onPress: () => console.log('NO Pressed'), style: 'cancel'},
                    {text: 'YES', onPress: () => this.Next()},
                   ]
                )}>
                  <SimpleLineIcon
                  name = 'user-follow' size = {25} color = '#FB5922'/>
              </TouchableOpacity>
            </Left>
            <Body>
              <Title style ={styles.titleHeader}>Timeline</Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => Alert.alert(
                  'Login Untuk Melanjutkan',
                  'Silahkan register atau login untuk mengakses pesan dan tawaran',
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
              <TouchableOpacity onPress={() => Alert.alert(
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
          <Content>
          <View style ={{flex : 1, flexDirection : 'row', backgroundColor : '#32ba7a', height : 100}}>
            <View style ={{flex :1, alignSelf:'center', marginLeft : 10}}>
              <Text style ={{fontSize : 11, color : '#fff'}}>Baru di Shopee?</Text>
              <Text style ={{fontSize : 11, color : '#fff'}}>Register sekarang untuk personalisasikan akun Anda dan dapatkan informasi terbaru</Text>
            </View>
            <View style ={{flex: 0.5, alignSelf : 'center', justifyContent : 'center'}}>
              <Button
                bordered
                onPress = {() => this.props.navigation.push('AuthScreen')}
                small
                style = {styles.btnRegister}
                >
                    <Text style={styles.txtRegister}>Register</Text>
                </Button>
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