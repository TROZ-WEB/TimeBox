import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

import {LinearGradient} from 'expo';

import colors from '../constants/colors';

const Header = props => {
    return(
        <View style={style.headerContainer}>
            <Text style={style.headerText}>{props.children}</Text>
        </View>
    );
};

const style = StyleSheet.create ({
    headerContainer:{
        justifyContent:"center",
        paddingLeft : '10%',
        height : 80,
        marginBottom : 50,
    },
    headerText:{
        color : 'white',
        fontSize : 22,
    },
});

export default Header;