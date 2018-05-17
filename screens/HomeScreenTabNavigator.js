import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

import { Icon } from "native-base";
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'

export default class AppTabNavigator extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft:(
                <View style={{padding:10}}>
                    <Ionicons name="md-menu" size={30} onPress={
                        ()=>navigation.navigate('DrawerOpen')}
                        />
                        </View>
            )
        }
    }
    render (){
        return(
            <HomeScreenTabNavigator/>
        )
    }
}

const HomeScreenTabNavigator= new TabNavigator ({
    ScreenOne : {
        screen: ScreenTwo,
        navigationOptions:{
            tabBarLabel:'Feed',
            tabBarIcon:()=>(
                <Ionicons name="md-compass" size={25}/>
            )
        }
        
    },
    ScreenTwo : {
        screen: ScreenOne,
        navigationOptions:{
            tabBarLabel:'Feed',
            tabBarIcon:() =>(
                <Ionicons name="md-compass" size={24}/>
            )
        }
        
    }, 
        
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel:false,
        showIcon: true
    }
});



const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});