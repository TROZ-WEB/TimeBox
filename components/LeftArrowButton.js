import React from 'react';
import {View,StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import colors from '../constants/colors';

const MainButton = props => {
    return (
      <TouchableWithoutFeedback activeOpacity={0.6} onPress={props.onPress} style={style.container}>
          <View style={{...style.button,...props.style}}>
                <AntDesign name="left" color="white" size={20} style={style.icon}/>
                <Text style={style.buttonText}>{props.children}</Text> 
          </View>
      </TouchableWithoutFeedback>  
    );
};

const style = StyleSheet.create({
    container : {
        flexDirection : "row",
        height : "20%",
        paddingTop : '5%',
    },
    button : {
        backgroundColor:colors.button,
        borderWidth : 2,
        borderColor : colors.button,
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1,
        marginHorizontal : 5,
    },
    buttonText:{
        fontFamily : 'montserrat',
        color : 'white',
        fontSize : 18,
    },
    icon:{
        textAlign : "right",
    }
});

export default MainButton;