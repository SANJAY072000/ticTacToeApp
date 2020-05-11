import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40
  }
});


drawItem=()=>{

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
