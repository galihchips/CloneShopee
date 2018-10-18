import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AllChat from '../childScreens/childAccount/AllChat';
import NewChat from '../childScreens/childAccount/NewChat';

class Chat extends Component {
	render(){
		return (
				 <Container>
				 	<Header androidStatusBarColor="#000" style ={{backgroundColor : '#fff'}}>
			            <Left>
			              <AntDesignIcon
			              onPress = {() => this.props.navigation.goBack()} 
			              name = 'arrowleft' color = {'#FB5922'} size = {27} />
			            </Left>
			            <Body>
			              <Title style ={{color : '#000'}}>Chat</Title>
			            </Body>
			            <Right>
			                <MaterialIcon name = 'search' color = {'#FB5922'} size = {27} />
			            </Right>
			          </Header>
			        <Tabs
			        tabBarUnderlineStyle = {{ backgroundColor: '#FB5922', height: 1 }}>
			          <Tab heading="Semua" activeTextStyle={{ color: '#FB5922' }} 
				          textStyle={{ color: '#000', fontSize: 13 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
			            <AllChat />
			          </Tab>
			          <Tab heading="Baru" activeTextStyle={{ color: '#FB5922' }} 
				          textStyle={{ color: '#000', fontSize: 13 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
			            <NewChat />
			          </Tab>
			        </Tabs>
			      </Container>
			)
	}
}

export default withNavigation(Chat);