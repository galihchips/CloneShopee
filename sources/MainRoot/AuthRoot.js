import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  StyleSheet,
  Image
} from 'react-native';

class AuthRoot extends React.Component {
  constructor(props) {
    super(props);
    this.Auth();
  }

  // Fetch the token from storage then navigate to our appropriate place
  Auth = async () => {
    const userToken = await AsyncStorage.getItem('TOKEN');
    this.props.navigation.navigate(userToken ? 'LoggedIn' : 'LoggedOut');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style = {styles.viewParent}>
            <View style ={styles.viewChildComp}>
              <Image source = {{uri : 'https://cdn.techinasia.com/data/images/98df8553bcb9d4bfc3d3ec01c315192f.png'}} 
              style ={{width : 100, height : 100}}
              />
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  headerColor :{
    backgroundColor : '#fff'
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
    backgroundColor : '#FFF'
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

export default AuthRoot