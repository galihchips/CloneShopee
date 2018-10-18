import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content, Left, Body, Right, Thumbnail, Text, Button,  List, ListItem, CardItem } from 'native-base';


export default class Account extends Component {
	static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
  
    this.state = {
    	
    };
  }

  navigate = () => {
  	this.props.navigation.push('AuthScreen')
  }

  render() {
     return (

    	<Container>
    	<Content>
    		<View>
		          <Image
		            style ={styles.image} 
		            source = {{uri : 'https://cdn.pixabay.com/photo/2016/02/19/11/23/sunset-1209683_960_720.jpg'}} 
		          />
		          <View style ={styles.viewParent}>
		          	<View style ={styles.viewChildHeader}>
		          		<TouchableOpacity
		          		onPress = {() => this.props.navigation.push('AuthScreen')}>
			          		<FeatherIcon 
			          			  
				                  style ={{margin : 20}}
				                  name = 'shopping-cart' size = {20}
				                  color = '#fff' />
				        </TouchableOpacity>
				        <TouchableOpacity
				        onPress = {() => this.props.navigation.push('ChatScreen')}
				        >
			                <AntDesignIcon
			                	
			                	style ={{marginTop : 20,marginRight : 20}}
				                name = 'message1' 
				                size = {20} 
				                color = '#fff' />
				        </TouchableOpacity>
		          	</View>
		          	<View style ={styles.viewChildBody}>
		          		<Thumbnail
		          			source = {{uri : 'https://mbtskoudsalg.com/images/avatar-png-icon-1.png'}}
		          			style = {styles.thumbnail}
		          		/>
		          		<View style={styles.childViewBody}>
		                      <Button
		                      onPress = {() => this.props.navigation.push('AuthScreen')}
		                      small
		                      style = {styles.btnRegister}
		                      >
		                          <Text style={styles.txtRegister}>Register</Text>
		                      </Button>
		                      <Button
		                      onPress = {() => this.props.navigation.push('AuthScreen')}
		                      small
		                      bordered
		                      style = {styles.btnLogin}
		                      >
		                          <Text style={styles.txtLogin}>LOGIN</Text>
		                      </Button>
		                 </View>
		          	</View>

		          </View>
		     </View>
		     <View>
		     	<List>
			    	<ListItem icon
			    	onPress = {() => this.navigate()}
			    	>
			            <Left>
			              <Button small rounded style={{ backgroundColor: "#4286f4" }}>
			                <Ionicon color = '#fff' name="md-paper" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Belanjaan Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat Riwayat Pembelanjaan</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#db1811" }}>
			                <AntDesignIcon color = '#fff' active name="hearto" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Favorit Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat produk yang Anda sukai</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#e87902" }}>
			                <AntDesignIcon color = '#fff' active name="google" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Grup Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat Grup Saya</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#4fef00" }}>
			                <AntDesignIcon color = '#fff' active name="clockcircleo" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Terakhir Dilihat</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Produk yang pernah dilihat</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#e21600" }}>
			                <AntDesignIcon color = '#fff' active name="wallet" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Shopee Pay</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat ShopeePay Saya</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#ffaa00" }}>
			                <MaterialCommunityIcon color = '#fff' active name="coin" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Koin Shopee</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Cara mendapatkan Koin Shopee</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#4fef00" }}>
			                <AntDesignIcon color = '#fff' active name="staro" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Penilaian Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat penilaian Saya</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#FF9501" }}>
			                <MaterialCommunityIcon color = '#fff' active name="ticket-outline" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Voucher Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat voucher saya</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.navigate()}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#4286f4" }}>
			                <Icon color = '#fff' active name="user-o" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Akun Saya</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat akun saya</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
			          <ListItem icon
			          onPress = {() => this.props.navigation.push('Help')}
			          >
			            <Left>
			              <Button rounded style={{ backgroundColor: "#0033ff" }}>
			                <FeatherIcon color = '#fff' active name="help-circle" size = {20} />
			              </Button>
			            </Left>
			            <Body>
			              <Text style ={{fontSize : 13, color : '#666'}}>Bantuan</Text>
			            </Body>
			            <Right>
			            	<Text style ={{fontSize : 11, color : '#000'}} note>Lihat bantuan</Text>
			            	<EntypoIcon name = 'chevron-thin-right' size = {17}/>
			            </Right>
			          </ListItem>
		        </List>
		     </View>
		     <View>
		     	<CardItem style ={{height : 50, backgroundColor : '#eee'}}>
		     		
		     	</CardItem>
		     </View>
    	</Content>
      </Container>
    );
  }
}
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
  	width,
  	height : 200
  },
  viewParent : {
  	width: '100%',
  	position : 'absolute',
  	justifyContent: 'center',
  	alignItems: 'stretch'
  },
  viewChildHeader : {
  	flexDirection : 'row',
  	height : 100,
  	alignSelf : 'flex-end'
  },
  viewChildBody : {
  	height : 100,
  	marginLeft : 20,
  	flexDirection : 'row'
  },
  thumbnail : {
  	width : 60,
  	height : 60
  },
  childViewBody : {
  	flexDirection:'row',
  	marginLeft : 100,
  	marginTop :20
  },
  btnRegister : {
  	borderRadius:5,
  	backgroundColor : '#FB5922',
  	borderColor : '#fff',
  	marginRight : 10
  },
  txtRegister : {
  	fontSize:13,
  	color:'#fff',
  	textAlign : 'center'
  	,margin: 20
  },
  btnLogin : {
  	borderRadius:5,
  	borderWidth: 1,
  	borderColor : '#fff'
  },
  txtLogin : {
  	fontSize:13,
  	color:'#fff',
  	textAlign : 'center',
  	margin: 20
  },
  List :{
  	borderWidth : 0.2
  }
});