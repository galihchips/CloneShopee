import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Alert,
  ActivityIndicator
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EntypoIcon from 'react-native-vector-icons/Entypo'; 
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Thumbnail , Container, Content ,Header, Left, Body, Right, Title, Subtitle, Input,Tab, Tabs, Item, Button, Icon, Card, CardItem} from 'native-base';
import Swiper from 'react-native-swiper';
import CountDown from 'react-native-countdown-component';

import { connect } from 'react-redux';

import { fetchProducts } from '../../actions/Products';
import { fetchFashions } from '../../actions/Fashion';

const {width} = Dimensions.get('window')

const Slider = props => (
    <Image style = {styles.swiperImage} source ={props.uri} />
)
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  Next(){
    this.props.navigation.push('AuthScreen');
  }
  
  

  constructor(props) {
    super(props);
  
    this.state = {
      imageSlider : [
        require('../../image/lengkap.jpg'),
        require('../../image/gopay.jpg'),
        require('../../image/ongkir.png')
      ],
      modalVisible : false
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
      AsyncStorage.getItem('TOKEN', (err, response) => { 
    })
    this.props.dispatch(fetchFashions())
    this.props.dispatch(fetchProducts()) 
  }

  _renderItem(item){
  return (
          <View>
            <CardItem bordered>  
              <TouchableOpacity onPress = {() => this.props.navigation.push('DetailScreen', (item))}>
                <View style ={styles.viewChildList}>
                  <Image style ={styles.imageList} source = {{uri: item.imageUri}} />
                </View>
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style ={{color : '#FB5922',textAlign : 'center'}}>Rp {item.price}</Text>
              </Left>
              <Right> 
                <MaterialCommunityIcon name = 'truck-fast' size = {10} color = {'#FB5922'}/>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <AntDesignIcon name = 'hearto' size = {10}/>
              </Left>
              <Right style ={{flexDirection : 'row'}}>
                <EntypoIcon name = 'star' color = '#FB5922' size = {10} />
                <EntypoIcon name = 'star' color = '#FB5922' size = {10} />
                <EntypoIcon name = 'star' color = '#FB5922' size = {10} />
                <EntypoIcon name = 'star' color = '#FB5922' size = {10} />
              </Right>
            </CardItem>
          </View>
    )
  }
  
  render() {
    console.log(this.props.fashions)
    return (
      <Container>
        <Content>
                <Swiper
                  activeDotColor="#fff"
                  autoplay
                  height={150}
                >
                {
                  this.state.imageSlider.map((item, i)=><Slider
                    uri={item}
                    key={i}
                    />)
                } 
                </Swiper>
                       <View style = {styles.viewParentSwiper}>
                          <View style ={styles.viewChildSwiper}>
                            <Item style={styles.searchBar}>
                              <AntDesignIcon style={styles.iconSearchBar} size={20} name="search1" />
                                <Input style={styles.inputSearchBar}placeholderTextColor = "#FB5922" placeholder ="Shopee" />
                              <SimpleLineIcon style={styles.iconSearchBar} name="camera" size = {20}/>
                            </Item>
                          </View>
                          <View style ={styles.viewChildHeader}>
                            <TouchableOpacity onPress = {() => this.props.navigation.push('CartScreen')}>
                              <FeatherIcon 
                                style ={styles.iconHeader}
                                name = 'shopping-cart' size = {25}
                                color = '#FFF' 
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => this.props.navigation.push('ChatLoginScreen')}>
                              <AntDesignIcon
                              style = {{marginRight:20}}
                              name = 'message1' 
                              size = {25} 
                              color = '#FFF' />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style = {styles.viewParentMenu}>
                           <Grid>
                              <Col style={styles.colMenu}>
                                 <View>
                                   <View>
                                    <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/shopeemart.png')} />
                                    <Text style = {styles.txtColMenu}> Shopee Mart</Text>
                                   </View>
                                   <View style ={{marginTop: 30}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/men.png')} />
                                      <Text style = {styles.txtColMenu}>Shopee for Men</Text>
                                   </View>
                                 </View>
                              </Col>
                              <Col style={styles.colMenu}>
                                <View>
                                   <View>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/termurah.png')} />
                                      <Text style = {styles.txtColMenu}>Garansi Harga Termurah</Text>
                                   </View>
                                   <View style ={{marginTop:20}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/grup.png')} />
                                      <Text style = {styles.txtColMenu}>Grup Hemat</Text>
                                   </View>
                                 </View>
                              </Col>
                              <Col style={styles.colMenu}>
                                <View>
                                   <View>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/pulsa.png')} />
                                      <Text style = {styles.txtColMenu}>Pulsa, Tagihan & Game</Text>
                                   </View>
                                   <View style ={{marginTop:20}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/toko.png')} />
                                      <Text style = {styles.txtColMenu}>Voucher Toko</Text>
                                   </View>
                                 </View>
                              </Col>
                              <Col style={styles.colMenu}>
                                <View>
                                   <View>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/ongkir.png')} />
                                      <Text style = {styles.txtColMenu}>Gratis Ongkir</Text>
                                   </View>
                                   <View style ={{marginTop: 30}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/bank.png')} />
                                      <Text style = {styles.txtColMenu}>Promo Bank</Text>
                                   </View>
                                 </View>
                              </Col>
                              <Col style={styles.colMenu}>
                                <View style = {{alignSelf : 'center'}}>
                                   <View style = {{alignSelf : 'center'}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/koin.png')} />
                                      <Text style = {styles.txtColMenu}>Reward Koin Shopee</Text>
                                   </View>
                                   <View style = {{alignSelf : 'center', marginTop: 20}}>
                                     <Image 
                                      style = {styles.colImage}
                                      source = {require('../../image/homesrc/promo.png')} />
                                      <Text style = {styles.txtColMenu}> Semua Promo</Text>
                                   </View>
                                 </View>
                              </Col>
                          </Grid>
                        </View>
                        <View>
                          <Image 
                            style = {{width : width, alignSelf:'center'}}
                            source = {require('../../image/homesrc/iklan.png')} />
                        </View>
                        <View>
                          <Card>
                            <CardItem bordered>
                              <Left style ={{flexDirection:'row'}}>
                                <Text style = {{fontSize : 17, fontWeight : 'bold', color : '#FB5922'}}>FLASH SALE</Text>
                              </Left>
                              
                            </CardItem>
                             <View>
                              <FlatList
                                keyExtractor={(item, index) => index.toString()}
                                SeparatorComponent={() => <View style ={{width :10}} />}
                                horizontal
                                renderItem={({item}) => this._renderItem(item)}
                                data = {this.props.fashions}
                              />
                            </View>
                          </Card>
                        </View>
                        
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  viewParentSwiper :{
    flex : 1,
    flexDirection : 'row',
    width : '100%',
    position : 'absolute',
    paddingTop :10
  },
  searchBar : {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width:250, 
    height:35,
    marginLeft : 20
  },
  viewChildSwiper : {
    flex : 1
  },
  iconSearchBar : {
    margin:10
  },
  inputSearchBar : {
    fontSize:14
  },
  viewChildHeader : {
    flex : 0.3 ,
    flexDirection : 'row'
  },
  iconHeader: {
    marginRight :20 
  },
  viewParentMenu :{
    backgroundColor : '#FB5922',
    paddingTop : 10,
    paddingBottom : 20
  },
  swiperImage :{
    width : width,
    resizeMode : 'stretch'
  },
  viewChildList :{
    borderWidth:0.2,
    borderColor : '#aaa',
    marginLeft:20
  },
  imageList :{
    width :110,
    height :130
  },
  colMenu :{
    alignItems:'center',
    alignSelf:'center'
  },
  colImage :{
    width : 40,
    height : 40,
    alignSelf:'center'
  },
  txtColMenu : {
    fontSize : 10,
    color : '#fff',
    textAlign:'center'
  }
});
const mapStateToProps = (state) => {
  return {
    fashions: state.fashions.fashions,
    products : state.products.products
  }
}
export default connect(mapStateToProps)(HomeScreen);

