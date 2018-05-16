import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
    } from "react-native";

   

class WelcomeScreen extends Component{

        static navigationOptions = {
            header:null
        }



    render(){
        return (
         
            
            <View style={styles.FullScreencontainer}>

            <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center',
                   
                    alignContent: 'center',
                    backgroundColor:'red' ,
                    flex:4

                    }}>
                   
                    <Text>Welcome </Text>
                </View>

                <View
                    style={{
                    flexDirection: 'row',
                     backgroundColor:'yellow' ,
                     alignItems: 'center',
                     flex:0.5
                                    }}>
                    

                <View style={{flex:1}}>  
                    <Button title="Log in" onPress={()=>this.props.navigation.navigate
                ('LoginScreen')}/>
                </View>
                

              <View style={{flex:1,marginLeft:5}}>
               <Button title="Sign Up" onPress={()=>this.props.navigation.navigate
                ('SignUpScreen')}/>

                </View>
            

                 </View>


            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    FullScreencontainer:{
    flex:1,

   
    flexDirection:'column',
    
    }
});