import React,{Component} from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Image,TouchableOpacity,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Title, Input,Item } from 'native-base';
import { AppLoading } from 'expo';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {isl:true};
  }
  async UNSAFE_componentWillMount(){
  await  Expo.Font.loadAsync({
      Roboto:require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium:require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({isl:false});
  }
  render(){
    if(this.state.isl)return <AppLoading/>;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Card Image</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
          <TouchableOpacity>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                <Body>
                  <Text>Sanjay Singh Bisht</Text>
                  <Text note>Programmer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Tasks</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
