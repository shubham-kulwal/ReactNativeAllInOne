import React, { Component } from "react";
import { View, Text, TouchableOpacity,ActivityIndicator,RefreshControl } from "react-native";
import { Header, Title, Left, Right, Icon, Fab, Body } from "native-base";
import { FlatList, TextInput } from "react-native-gesture-handler";
import  ListItems from './ListItems'

export default class YoutubeList extends Component {

  static navigationOptions = {
    drawerLabel: 'Youtube'
   
  };

  state = { youtubeList: [],
             progressDialog:false,
            showSearchBar:false ,
            backupYoutubeList:[],
            refreshing:false};

  componentDidMount() {
      this.setState({progressDialog:true});
    this.fetchApi();
  }

  fetchApi =()=>{
    fetch(
        "https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json"
      )
        .then(response => response.json())
        .then(responseJson => this.setState({ youtubeList: responseJson ,progressDialog:false,backupYoutubeList:responseJson,refreshing:false}))
        .catch(error => {
          console.error(error);
        });
  }
  render() {
    return (
      <View style={{flex:1}}>
         {this.setHeader()}
        
         <ActivityIndicator animating={this.state.progressDialog} size={this.state.progressDialog ? "large": 0 } style={{alignItems:'center',justifyContent:'center'}}></ActivityIndicator>
        
        <FlatList
          data={this.state.youtubeList}
          keyExtractor={items=>items.title}
          renderItem={({ item }) => (
            <ListItems
              thumbnailImage={item.thumbnail_image_name}
              profileImage={item.channel.profile_image_name}
              title={item.title}
              name={item.channel.name}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        > </FlatList>
      </View>
    );
  }

  _onRefresh = () => {
      this.setState({refreshing: true,progressDialog:false});
      this.fetchApi();
  }

  setHeader=()=>{
    if(this.state.showSearchBar){
        return(
        <Header style={{ backgroundColor: "#ffffff" }}>
        <Left>
        <TouchableOpacity>
         <Icon  name="menu" type="MaterialIcons" onPress={() => this.props.navigation.openDrawer()}/>
        </TouchableOpacity>
        </Left>
        <TextInput placeholder="Search" style={{marginHorizontal:10,width:"80%"}} onChangeText={(text) => this.SearchFilterFunction(text)}></TextInput>
      
        <Right>
        <TouchableOpacity>
         <Icon  name="close" type="MaterialIcons" onPress={() => this.setState({showSearchBar:false, youtubeList:this.state.backupYoutubeList})}/>
        </TouchableOpacity>
        </Right>
        </Header>
        );
      }else{
          return(
       <Header style={{ backgroundColor: "#ffffff" }}>
       <Left>
       <TouchableOpacity>
       <Icon  name="menu" type="MaterialIcons" onPress={() => this.props.navigation.openDrawer()}/>
      </TouchableOpacity>
       </Left>

       <Body><Title style={{ color: "red", fontSize: 20 }}>
       YouTube
       </Title></Body>
     
       <Right>
       <TouchableOpacity>
        <Icon name="search" type="MaterialIcons" onPress={() => this.setState({showSearchBar:true, youtubeList:this.state.backupYoutubeList})}/>
       </TouchableOpacity>
       </Right>
  </Header>
          );
      }
  }

  SearchFilterFunction =(text) =>{
     if(text==""){
        this.setState({youtubeList:this.state.backupYoutubeList})
     }else{
      const newData = this.state.youtubeList.filter(item=>{
        
        return item.title.toUpperCase().includes(text.toUpperCase());
     })
        this.setState({youtubeList:newData})
    }
}
}
