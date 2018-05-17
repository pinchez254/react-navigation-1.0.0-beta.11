import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class FeedCard extends Component {
  render() {
    return (
      
      <Container>
      <Header />
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={
        {uri: 'https://pbs.twimg.com/profile_images/961834660752863232/W0X7JK2t_400x400.jpg'}} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={
         {uri: 'https://pbs.twimg.com/media/DcdycZnX4AASGEi.jpg'}}
          style={{height: 200, width: 200, flex: 1}}/>
              <Text>
                //Your text here
                blah blah blah 
                adfghjnm,bv 
                vbnmnb
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
  }
}