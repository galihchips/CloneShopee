import React, { Component } from 'react';
import { Container, Header, Content, Item, Input,Left,Body,Right, Button } from 'native-base';
import { View, Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { createUser } from '../../actions/Register';
import { connect } from 'react-redux';

class Register extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  
    this.state = {
      email : '',
      password : '',
      name : 'RANDOM'
    };
  }

  handleSave(){
    this.props.dispatch(createUser(this.state))
    alert('User Created')
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
                secureTextEntry={true}
                onChangeText={(text)=>this.setState({password: text})}
                placeholder="Password" />
              </Item>
              <View style ={{marginTop:20}}>
                <Button 
                onPress={() => this.handleSave()}
                style ={{backgroundColor : '#FB5922'}} 
                full>
                  <Text style ={{color : '#fff'}}>DAFTAR</Text>
                </Button>
              </View>
            </View>
          </View>
          <View style ={{width :'85%', alignSelf :'center', bottom : 0, paddingTop: 200}}>
            <Button 
                onPress = {() => this.onLoginPressed()}
                style ={{backgroundColor : '#2195c6', borderRadius:3}} 
                full>
                  <Left style ={{flex :0.2, marginLeft : 10}}>
                    <MaterialCommunityIcon name = 'email' size = {25} color = '#fff'/>
                  </Left>
                  <Body >
                    <Text style ={{ textAlign:'center', color : '#fff'}}>Daftar Melalui Email</Text>
                  </Body>
                  <Right style ={{flex :0.2}} />
                </Button>
          </View>
          <View style ={{marginBottom : 30, width :'85%', alignSelf :'center', bottom : 0, marginTop : 20}}>
            <Button 
                onPress = {() => this.onLoginPressed()}
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
const mapStateToProps = (state)=>{
  return{
    register : state.register
  }
}
export default connect(mapStateToProps)(Register);