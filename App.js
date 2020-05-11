import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Button} from 'native-base';


const itemArray=new Array(9).fill('empty');

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40
  }
});


drawItem=itemNumber=>{
if(itemArray[itemNumber]==='empty'){
itemArray[itemNumber]=this.state.isCross;
this.setState({isCross:!this.state.isCross});
}
}

chooseItemIcon=()=>{

}


resetGame=()=>{

}

winGame=()=>{

}



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCross:false,
      winMsg:''
    };
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text>Tic Tac Toe</Text>
      </View>
      </SafeAreaView>
    );
  }
}
