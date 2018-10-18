 import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Login from '../childScreens/childNotif/Login';
import Register from '../childScreens/childNotif/Register';

class AuthScreen extends Component {
	render(){
		return (
				 <Container>
			        <Tabs
			        tabBarUnderlineStyle = {{ backgroundColor: '#FB5922', height: 1 }}>
			          <Tab heading="Register" activeTextStyle={{ color: '#FB5922' }} 
				          textStyle={{ color: '#000', fontSize: 13 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
			            <Register />
			          </Tab>
			          <Tab heading="Login" activeTextStyle={{ color: '#FB5922' }} 
				          textStyle={{ color: '#000', fontSize: 13 }} 
				          tabStyle={{ backgroundColor: '#fff' }} 
				          activeTabStyle={{ backgroundColor: '#fff' }}>
			            <Login />
			          </Tab>
			        </Tabs>
			      </Container>
			)
	}
}

export default AuthScreen;