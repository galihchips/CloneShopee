import React, { Component } from 'react';
import { View, Image, FlatList } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right,Title , Item, Input, Separator, CardItem, Button } from 'native-base';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { fetchCourier } from '../../actions/Courier';
class Courier extends Component {
	
	componentDidMount(){
		this.props.dispatch(fetchCourier())
	}

	_renderItem(item){
		<Text>LALALAL</Text>
	}

	render(){
		console.log(this.props.couriers)
		return (
				<Container>
					<Header androidStatusBarColor="#000" style ={{backgroundColor : '#fff'}}>
	                  <Left>
	                    <AntDesignIcon
	                    onPress = {() => this.props.navigation.goBack()} 
	                    name = 'arrowleft' color = {'#FB5922'} size = {25} />
	                  </Left>
	                  <Body>
	                    <Title style ={{color : '#000'}}>Pilih Pengiriman</Title>
	                  </Body>
	                  <Right />
	                </Header>
	                	<View style ={{backgroundColor:'#ddd', flexDirection: 'column', height : 70}}>
		                		<Text note style ={{fontSize : 14, margin : 3}}>JASA KIRIM YANG DIDUKUNG SHOPEE</Text>
		                		<View>
				                		<Text style = {{fontSize : 12, margin : 3 }}>Anda dapat melacak pesanan yang menggunakan Jasa Kirim yang Didukung Shopee</Text>
			                	</View>
		                </View>
		                <View>
	                		<FlatList
				              keyExtractor={(item, index) => index.toString()}
				              data = {this.props.couriers}
				              renderItem={({item}) =>
				              	<ListItem 
				              	onPress ={() => this.props.navigation.navigate('Checkout', (item))}
				              	bordered>
				              		<Left style ={{flexDirection : 'row'}}>
				              			<Text>{item.name}</Text>
				              			<Body>
				              				<Text style ={{color : '#FB5922'}}>{item.price}</Text>
				              			</Body>
				              			
				              		</Left>
				              	</ListItem>
				              }
				            />
				        </View>
				</Container>
			)
	}
}

const mapStateToProps = (state) => {
  return {
    couriers : state.couriers.couriers
  }
}
export default connect(mapStateToProps)(Courier)