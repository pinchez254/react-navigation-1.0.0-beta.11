import React, { Component } from "react";
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import HomeScreenTabNavigator from './HomeScreenTabNavigator'
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";


 const InnerStackNavigator = new  StackNavigator ({
        TabNavigator: {
            screen:HomeScreenTabNavigator
        }
    })
        

const AppDrawerNavigator = new DrawerNavigator ({
    HomeScreen:
     {screen: InnerStackNavigator
     }
})


export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});