import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,} from 'react-native';
import { Icon } from "native-base";

const Header = (props) =>{
  return(
      <View style={styles.container}>
      <TouchableOpacity style={{marginStart:8,marginTop:8}}>
      <Icon  name="menu" type="MaterialIcons" onPress={() => props.openDrawer.openDrawer()}/>
     </TouchableOpacity>
          <Image style={{  width:"6%",height:"55%",marginTop:10,marginLeft:15,paddingLeft:10,marginBottom:15}} resizeMode='center' source={require('../Images/pininterest_icon.png') }  ></Image>

          <View style={{ width:"65%"}}></View>
          <Image style={styles.pininterestIconStyle}  source={require('../Images/search_icon.png') } resizeMode="center" ></Image>
          <Image style={styles.pininterestIconStyle}  source={require('../Images/message_icon.png') } resizeMode="center" ></Image>
          <Image style={[styles.pininterestIconStyle,{marginBottom:15,marginTop:15}]}  source={require('../Images/profile_icon.png') } resizeMode="center" ></Image>
      </View>
  );

}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height:"7%",
      flexDirection:'row',

    },

    pininterestIconStyle:{
       width:"20%",
       height:"50%",
       marginTop:15,
       flex:3
    }
  });

export default Header;