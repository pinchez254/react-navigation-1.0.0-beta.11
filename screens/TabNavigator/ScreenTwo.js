import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
    } from "react-native";
import FeedCard from '../TabNavigator/FeedCard'
import CardComponent from "./CardComponent";

class ScreenTwo extends Component{
    render(){
        return (
            <ScrollView style={styles.container}>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
            </ScrollView>
        );
    }
}
export default ScreenTwo;

const styles = StyleSheet.create({
    container:{
    flex:1,
   
    }
});