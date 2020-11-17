import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ProgressBar from "../components/ProgressBar";
import RightArrowButton from "../components/RightArrowButton";
import LeftArrowButton from "../components/LeftArrowButton";
import MainButton from "../components/MainButton";



const Screen = props => {
    return(
        <View style = {style.navButtonsContainer}>
            <ProgressBar page={props.page}/>
            <View style = {style.buttonsContainer}>
                {/* <LeftArrowButton style={style.button} onPress={() => this.provideParams("previous")}>Previous</LeftArrowButton>
                <RightArrowButton style={style.button} onPress={() => this.provideParams("next")}>Next</RightArrowButton> */}
                <MainButton style={style.button} onPress={() => this.provideParams("previous")}>Previous</MainButton>
                <MainButton style={style.button} onPress={() => this.provideParams("next")}>Next</MainButton>
            </View>
        </View>
    );
};

const style = StyleSheet.create ({
    navButtonsContainer : {
        height : "20%",
        justifyContent:"center",
        alignItems : "center",
        borderWidth : 1,
    },
    buttonsContainer:{
        // flexDirection : 'row',
        // justifyContent : "space-between",
        // marginTop : 10,
        // paddingTop : '5%',

        flexDirection : "row",
        height : "20%",
        paddingTop : '5%',
    },
    button:{
        flex: 1,
    },
});

export default Screen;