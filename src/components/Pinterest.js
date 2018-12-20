import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,FlatList,ScrollView,Drawer} from 'react-native';
import Header from './Header'
import ListItems from './ListItems';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });
  
  
  export default class App extends Component<Props> {
       
       //state={dataSource:[]}
       constructor(props) {
        super(props);
        this.state = {
          dataSource:[],
        };
      }
    
    componentDidMount() {
       
         fetch('https://demo6231795.mockable.io/')
         .then((response) => response.json())
         .then((responseJson) => {this.setState({dataSource:responseJson.resource_data_cache[0].data.results})})
         .catch((error) => console.log('error',error))
      }
    
    
    render() {
     // console.log('response',this.state.dataSource)
      var leftList=[];
      var rightList=[];
         for(i=0;i<this.state.dataSource.length;i++){
           if(i%2==0){
            leftList.push(this.state.dataSource[i])
           }else{
             if(i==this.state.dataSource.length-1){
              leftList.push(this.state.dataSource[i])
             }else{
              rightList.push(this.state.dataSource[i])
             }
           }
         }
         
      return (
  
        <View style={styles.container}>
         <Header openDrawer={this.props.navigation}/>
        
         <ScrollView  style ={{marginBottom:15}}>
         <View style={{flexDirection:'row'}}>
  
            <FlatList 
            vertical={false}
            data={leftList}
            style={{width:'50%'}}
            renderItem={({item}) =>
             <ListItems
            imageURL={item.images["170x"].url}
            imageHeight={300}
            name={item.board.name}
            />}
            />
  
            <FlatList 
            vertical={false}
            data={rightList}
            style={{width:'50%'}}
            renderItem={({item}) => 
            <ListItems
            imageURL={item.images["170x"].url}
            imageHeight={400}
            name={item.board.name}
            />
          }
            />           
         </View>
         </ScrollView>
        </View>
      );
    }
  }
  
   
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
    },
  });
