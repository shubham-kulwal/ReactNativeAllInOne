import {createDrawerNavigator,createAppContainer,DrawerItems, SafeAreaView} from 'react-navigation';
import React,{Component} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import YoutubeList from '../components/YoutubeList'
import HomeScreen from '../components/HomeScreen';
import Pinterest from '../components/Pinterest';

export default class DrawerNavigation extends Component{

    render(){
        return(
            <MyApp/>
        );
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
       <View style={{backgroundColor:'red',height:200}}>
    </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });


const MyDrawerNavigator = createDrawerNavigator({
    Youtube:YoutubeList,
    Pinterest:Pinterest,
   
  },{
    contentComponent:CustomDrawerContentComponent,
    drawerWidth:250,
  });
  
  const MyApp = createAppContainer(MyDrawerNavigator);
