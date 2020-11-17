import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import colors from '../constants/colors';

const Title = props => {
    return(
        <View style={{...style.titleContainer, ...props.style}}>
            <Text style={style.titleText}>{props.children}</Text>
        </View>
    );
};

const style = StyleSheet.create ({
    titleContainer:{
        marginBottom : 20,
    },
    titleText:{
        fontSize : 20,
        color : colors.title,
        fontFamily : 'montserrat-bold',
        textAlign : "center",
    }
});

export default Title;