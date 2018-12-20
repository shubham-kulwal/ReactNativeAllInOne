import {createStackNavigator,createAppContainer} from 'react-navigation';
import React from 'react';
import YoutubeList from '../components/YoutubeList'
import HomeScreen from '../components/HomeScreen';
import DrawerNavigation from './DrawerNavigation';


const Navigation = createStackNavigator({

  DrawerComponent: {screen: DrawerNavigation,navigationOptions: {
    header: null
  }},
  
  
  home: {screen: HomeScreen ,navigationOptions: {
   title:"welcome"
  }},

 
  Youtube: {screen: YoutubeList,navigationOptions: {
    header: null
  }},
 
});

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
