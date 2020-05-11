import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Button} from 'native-base';

const itemArray=new Array(9).fill('empty');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isCross:false,
      winMsg:''
    };
  }

  drawItem=itemNumber=>{
  if(itemArray[itemNumber]==='empty'){
  itemArray[itemNumber]=this.state.isCross;
  this.setState({isCross:!this.state.isCross});
  }
  this.winGame();
  }

  chooseItemIcon=itemNumber=>{
  if(itemArray[itemNumber]!=='empty'){
    return itemArray[itemNumber]?'cross':'circle';
  }
  return 'pencil';
  }

  chooseItemColor=itemNumber=>{
  if(itemArray[itemNumber]!=='empty'){
      return itemArray[itemNumber]?'red':'green';
  }
    return 'black';
  }


  resetGame=()=>{
  itemArray.fill('empty');
  this.setState({winMsg:''});
  }

  winGame=()=>{
  if((itemArray[0]!='empty')&&(itemArray[0]==itemArray[1])&&(itemArray[1]==itemArray[2])){
    this.setState({winMsg:(itemArray[0]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[3]!='empty')&&(itemArray[3]==itemArray[4])&&(itemArray[4]==itemArray[5])){
    this.setState({winMsg:(itemArray[0]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[6]!='empty')&&(itemArray[6]==itemArray[7])&&(itemArray[7]==itemArray[8])){
    this.setState({winMsg:(itemArray[6]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[0]!='empty')&&(itemArray[0]==itemArray[3])&&(itemArray[3]==itemArray[6])){
    this.setState({winMsg:(itemArray[0]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[1]!='empty')&&(itemArray[1]==itemArray[4])&&(itemArray[4]==itemArray[7])){
    this.setState({winMsg:(itemArray[1]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[2]!='empty')&&(itemArray[2]==itemArray[5])&&(itemArray[5]==itemArray[8])){
    this.setState({winMsg:(itemArray[2]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[0]!='empty')&&(itemArray[0]==itemArray[4])&&(itemArray[4]==itemArray[8])){
    this.setState({winMsg:(itemArray[0]?'Cross':'Circle').concat(' wins')});
  }
  else if((itemArray[2]!='empty')&&(itemArray[2]==itemArray[4])&&(itemArray[4]==itemArray[6])){
    this.setState({winMsg:(itemArray[2]?'Cross':'Circle').concat(' wins')});
  }
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
      <Image source={require('./assets/email.png')}/>
      <Text style={{fontSize:30,color:'orange',fontWeight:'bold'}}>Tic Tac Toe</Text>
      <View style={styles.grid}>
      <View style={styles.row}>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(0)}>
          <Entypo name={this.chooseItemIcon(0)} size={50} color={this.chooseItemColor(0)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(1)}>
          <Entypo name={this.chooseItemIcon(1)} size={50} color={this.chooseItemColor(1)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(2)}>
          <Entypo name={this.chooseItemIcon(2)} size={50} color={this.chooseItemColor(2)}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.row}>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(3)}>
          <Entypo name={this.chooseItemIcon(3)} size={50} color={this.chooseItemColor(3)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(4)}>
          <Entypo name={this.chooseItemIcon(4)} size={50} color={this.chooseItemColor(4)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(5)}>
          <Entypo name={this.chooseItemIcon(5)} size={50} color={this.chooseItemColor(5)}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.row}>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(6)}>
          <Entypo name={this.chooseItemIcon(6)} size={50} color={this.chooseItemColor(6)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(7)}>
          <Entypo name={this.chooseItemIcon(7)} size={50} color={this.chooseItemColor(7)}/>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <TouchableOpacity onPress={()=>this.drawItem(8)}>
          <Entypo name={this.chooseItemIcon(8)} size={50} color={this.chooseItemColor(8)}/>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      <Text style={styles.winMsg}>{this.state.winMsg}</Text>
      <Button full rounded warning style={styles.button} onPress={this.resetGame}><Text style={styles.btnText}>Reset Game</Text></Button>
      </SafeAreaView>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:35
  },
  row:{
    flexDirection:'row'
  },
  item:{
    borderWidth:3,
    borderColor:'#BB2CD9',
    padding:30
  },
  winMsg:{
    padding:20,
    fontSize:35,
    fontWeight:'bold',
    color:'#BB2CD9'
  },
  button:{
    margin:20,
    padding:10
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold'
  }
});
