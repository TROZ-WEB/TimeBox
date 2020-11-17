import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import Screen from "../components/Screen";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import RightArrowButton from "../components/RightArrowButton";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";

export default class test extends Component {

    constructor(props) {
        super(props);
    }

    render (){
        return(
            <View style={style.screen}>
                <View style={style.container1}>
                    <View style={style.box1}><Text>Yo</Text></View>
                    <View style={style.box2}><Text>azertyuiopqsdfghjklm wxcvbnqsdfghjklmazertyuiop</Text></View>
                </View>
                <View style={style.container2}>
                    <View style={style.box1}><Text>Yo</Text></View>
                    <View style={style.box2}><Text>azertyuiopqsdfghjklm wxcvbnqsdfghjklmazertyuiop</Text></View>
                </View>
            </View>
        );
    }

};

test.navigationOptions = (navigationData) => {
    return {
        headerShown : false,
    };
}

const style = StyleSheet.create ({
    screen : {
        paddingHorizontal : "10%",
        paddingTop: "10%",
        flex : 1,
    },
    container1 : {
        flexDirection : "row",
        backgroundColor : 'blue',
        height : "80%",
        borderColor : "pink",
        borderWidth : 3,
    },
    container2 : {
        flexDirection : "row",
        backgroundColor : 'blue',
        height : "20%",
        borderColor : "pink",
        borderWidth : 3,
        paddingTop : '5%',
    },
    box1 : {
        backgroundColor : 'red',
        marginRight : 5,
        flex:1,
    },
    box2 : {
        backgroundColor : 'green',
        flex:1,
        marginLeft : 5,
    },
});