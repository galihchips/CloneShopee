import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Button, Left, Body, Right } from 'native-base';
import axios from 'axios';
import { View, Text, AsyncStorage } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';
// import { loginUser } from '../../../actions/Login';

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email : '',
      password :''
    };
  }
  static navigationOptions = {
    header: null
  }

  onLoginPressed(){
    axios({
      method: 'post',
      url: 'http://192.168.0.10:5000/api/login/',
      data: this.state
    }).then((response, err) => {      
      AsyncStorage.setItem('TOKEN', response.config.data)
      this.props.navigation.navigate('LoggedIn')
    }).catch(err => {
      alert(err)
    })
  } 

  render() {
    return (
      <Container>
        <Content>
          <View style ={{flex :1}}>
            <View style ={{width :'85%', alignSelf :'center', flex:1, alignSelf : 'center', marginTop : 20}}>
              <Item>
                <Input 
                onChangeText={(text)=>this.setState({email: text})}
                placeholder="Email" />
              </Item>
              <Item>
                <Input
                onChangeText={(text)=>this.setState({password: text})}
                secureTextEntry={true}
                placeholder="Password" />
              </Item>
              
              <View style ={{marginTop:20}}>
                <Button 
                onPress = {() => this.onLoginPressed()}
                style ={{backgroundColor : '#FB5922',borderRadius : 3}} 
                full>
                  <Text style ={{color : '#fff'}}>LOG IN</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style ={{width :'85%', alignSelf :'center', bottom : 0, paddingTop: 200}}>
            <Button
                style ={{backgroundColor : '#3CC727', borderRadius:3}} 
                full>
                  <Left style ={{flex :0.2, marginLeft : 10}}>
                    <AntDesignIcon name = 'message1' size = {25} color = '#fff'/>
                  </Left>
                  <Body >
                    <Text style ={{ textAlign:'center', color : '#fff'}}>Login Melalui SMS</Text>
                  </Body>
                  <Right style ={{flex :0.2}} />
                </Button>
          </View>
          <View style ={{marginBottom : 30, width :'85%', alignSelf :'center', bottom : 0, marginTop : 20}}>
            <Button
                style ={{backgroundColor : '#4167B2', borderRadius:3}} 
                full>
                  <Left style ={{flex :0.2, marginLeft : 10}}>
                    <FontAwesomeIcon name = 'facebook-square' size = {25} color = '#fff'/>
                  </Left>
                  <Body >
                    <Text style ={{ textAlign:'center', color : '#fff'}}>Lanjutkan dengan Facebook</Text>
                  </Body>
                  <Right style ={{flex :0.2}} />
            </Button>
          </View>          
        </Content>
      </Container>
    );
  }
}
export default withNavigation(Login);