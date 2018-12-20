import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
 export default class HomeScreen extends Component{

  static navigationOptions = {
    drawerLabel: 'Home'
    
  };

    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle}
             onPress={() => this.props.navigation.navigate("DrawerComponent")}>
 
                <Text style={styles.welcome}>Enter Youtube</Text>
                
            </TouchableOpacity>
       </View>
        );
    }
}

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
      color:'#ffffff'
    },
    buttonStyle: {
      backgroundColor: 'red',
      marginBottom: 5,
    },
  });