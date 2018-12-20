import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const ListItems = (props) =>{

    return(
       <View>

         <Image 
          style={styles.imageStyle}
          source={{uri:props.thumbnailImage}}></Image> 

          <View style={styles.viewStyle}>
              <Image style={styles.profileImageStyle} source={{uri:props.profileImage}}></Image>
              <View style={{flexDirection:"column"}}>
              <Text style={styles.titleTextStyle}>{props.title}</Text>
              <Text style={{fontSize:8,color:'#000000',marginLeft:10,marginTop:5}}>{props.name}</Text>
              </View>
          </View>
       </View>

    );
}

const styles =StyleSheet.create(
    {
        imageStyle:{
             height:200,
       } ,
       
       viewStyle:{
           flexDirection:'row',
           height:50
       },

       profileImageStyle:{
         width:"10%",
         borderRadius:20 ,
         marginLeft:10,
         marginBottom:10,
         marginTop:5
           
      } ,

      titleTextStyle:{
        fontSize:10,
        color:'#000000',
        marginLeft:10,
        marginTop:5
      }
    }
)

export default ListItems;