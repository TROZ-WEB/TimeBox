import React from 'react';
import {View,StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import colors from '../constants/colors';

const MainButton = props => {
    return (
      <TouchableWithoutFeedback onPress={props.onPress} style={style.container}>
          <View style={{...style.button,...props.style}}>
              <Text style={{...style.buttonText,...props.styleText}}>{props.children}</Text>
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
        backgroundColor:'white',
        borderWidth : 2,
        borderColor : colors.button,
        paddingHorizontal : 10,
        paddingVertical : 10,
        borderRadius:5,
        flex:1,
        marginHorizontal : 5,
    },
    buttonText:{
        color : colors.button,
        fontSize : 18,
        textAlign : "center"
    }
});

export default MainButton;