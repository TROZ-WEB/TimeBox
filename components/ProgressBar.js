import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import colors from '../constants/colors';

const ProgressBar = props => {

    const progress = [];

    for (let index = 0; index < props.page; index++) {
        progress.push({id : index, dot :'circle'});
    }
    for (let index = 0; index < 14-props.page; index++) {
        progress.push({id : props.page+index+1, dot :'circle-o'});
    }

    return(
        <View style={style.progressBarContainer}>
            {progress.map((dotType) => <FontAwesome name={dotType.dot} color={colors.button} size={10} key={dotType.id}/>)}
        </View>
    );
};

const style = StyleSheet.create ({
    progressBarContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width : "60%",
    }
});

export default ProgressBar;