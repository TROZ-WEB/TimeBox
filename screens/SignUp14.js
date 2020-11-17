import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView, TextInput, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

import DateTimePicker from "react-native-modal-datetime-picker";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import LeftArrowButton from "../components/LeftArrowButton";
import RightArrowButton from "../components/RightArrowButton";
import Title from "../components/Title";
import P from "../components/P";
import ProgressBar from "../components/ProgressBar";

import colors from '../constants/colors';

export default class SignUp14 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wakeUp : this.props.navigation.getParam('wakeUp'),
            sleep : this.props.navigation.getParam('sleep'),
            job: this.props.navigation.getParam('job'),
            student: this.props.navigation.getParam('student'),
            hobby: this.props.navigation.getParam('hobby'),
            studentStart: this.props.navigation.getParam('studentStart'),
            studentEnd: this.props.navigation.getParam('studentEnd'),
            jobStart: this.props.navigation.getParam('jobStart'),
            jobEnd: this.props.navigation.getParam('jobEnd'),
            hobbyStart: this.props.navigation.getParam('hobbyStart'),
            hobbyEnd: this.props.navigation.getParam('hobbyEnd'),
            workout: this.props.navigation.getParam('workout'),
            workoutPreferences: this.props.navigation.getParam('workoutPreferences'),
            study: this.props.navigation.getParam('study'),
            studyPreferences : this.props.navigation.getParam('studyPreferences'),
            email : '',
            password : ''
        }
    }

    handleEmail = text=> {
        this.setState({email : text})
    }

    handlePassword = text=> {
        this.setState({password : text})
    }

    provideParams = props => {

        let params = {
            wakeUp : this.state.wakeUp, 
            sleep : this.state.sleep,
            job : this.state.job,
            student : this.state.student,
            hobby : this.state.hobby,
            studentStart : this.state.studentStart, 
            studentEnd : this.state.studentEnd,
            jobStart : this.state.jobStart, 
            jobEnd : this.state.jobEnd,
            hobbyStart : this.state.hobbyStart, 
            hobbyEnd : this.state.hobbyEnd,
            workout : this.state.workout,
            workoutPreferences : this.state.workoutPreferences,
            studyPreferences : this.state.studyPreferences,
            email : this.state.email,
            password : this.state.password,
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        if ((!this.state.email) || (!this.state.password)){
            Alert.alert("Please fill all the fields !")
        } 
        else {
            this.props.navigation.navigate({routeName : 'SignUp14', params : params})
        }
    }

    handlePrevious = params => {
        if (this.state.workout == "never") {
            this.props.navigation.navigate({routeName : 'SignUp12', params : params})
        }
        else {
            this.props.navigation.navigate({routeName : 'SignUp13', params : params})
        }
    }

    render (){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                        <Title>Save your informations !</Title>
                            <View style={style.buttonContainer}>
                                <TextInput style={style.input} placeholder='Email address' placeholderTextColor={colors.button} onChangeText={this.handleEmail} value={this.state.email} autoCompleteType={'email'} keyboardType={'email-address'} textContentType={'emailAddress'} />
                            </View>
                            <View style = {style.buttonContainer}>
                                <TextInput style={style.input} placeholder='Password' placeholderTextColor={colors.button} onChangeText={this.handlePassword} value={this.state.password} autoCompleteType={'password'} secureTextEntry={true} textContentType={'password'}/>
                            </View>
                        </View>
                    </View> 
    
                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={14}/>
                        <View style = {style.buttonContainer}>
                            <LeftArrowButton style={style.nextButton} onPress={() => this.provideParams("previous")}>Previous</LeftArrowButton>
                            <RightArrowButton style={style.nextButton} onPress={() => this.provideParams("next")}>Next</RightArrowButton>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
};

SignUp14.navigationOptions = () => {
    return {
        headerShown : false,
    };
}

const style = StyleSheet.create ({
    screen : {
        flex : 1,
    },
    contentContainer:{
        flex : 7,
    },
    container:{
        justifyContent:"flex-start",
        alignItems : "center",
        paddingHorizontal : "10%",
        paddingBottom : 50,
        flex:1,
    },
    nextButtonContainer : {
        flex : 1,
        justifyContent:"center",
        alignItems : "center",
        paddingHorizontal : "10%", 
        paddingBottom : 50,
    },
    buttonContainer:{
        flexDirection : 'row',
        justifyContent : "space-between",
        marginVertical : 10,
        width : "100%",
    },
    input : {
        backgroundColor:'white',
        borderWidth : 2,
        borderColor : colors.button,
        paddingHorizontal : 20,
        paddingVertical : 10,
        borderRadius:5,
        color : colors.button,
        fontSize : 18,
        flex : 1,
    }
});