import React from 'react';
import {View,StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

import colors from '../constants/colors';

const P = props => {
    return (
      <TouchableWithoutFeedback onPress={props.onPress} style={style.container}>
          <View style={{...style.p,...props.style}}>
              <Text style={{...style.pText,...props.styleText}}>{props.children}</Text>
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
    p : {
        paddingVertical : 10,
        flex:1,
        marginHorizontal : 5,
    },
    pText:{
        color : colors.title,
        fontSize : 15,
        textAlign : "center"
    }
});

export default P;