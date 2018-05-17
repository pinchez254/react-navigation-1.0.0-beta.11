import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import CardComponent from '../TabNavigator/CardComponent'

class ScreenOne extends Component{
    render(){
        return (
            <View style={styles.container}>
                <CardComponent/>
            </View>
        );
    }
}
export default ScreenOne;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});