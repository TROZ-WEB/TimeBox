import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import MainButtonFocus from "../components/MainButtonFocus";
import RightArrowButton from "../components/RightArrowButton";
import LeftArrowButton from "../components/LeftArrowButton";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";
import { NavigationEvents } from 'react-navigation';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class SignUp12 extends Component {

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
            study : '',
        }
    }

    handleSelection = choice => {
        this.setState({study : choice})
    };

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
            study : this.state.study
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        if (!this.state.study){
            Alert.alert("Please select an answer !")
        }
        else if (this.state.workout == 'never'){
            this.props.navigation.navigate({routeName : 'SignUp14', params : params})
        }
        else {
            this.props.navigation.navigate({routeName : 'SignUp13', params : params})
        }
    }

    handlePrevious = params => {
        if (this.state.workout == "never") {
            this.props.navigation.navigate({routeName : 'SignUp10', params : params})
        }
        else {
            this.props.navigation.navigate({routeName : 'SignUp11', params : params})
        }
    }
    
    render (){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                        <Title>Out of school, how often do you study ?</Title>
                            <View style={style.buttonContainer}>
                                {this.state.study == 'never' ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('never')}>Never</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleSelection('never')}>Never</MainButton>}

                                {this.state.study == 'sometimes' ?   
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('sometimes')}>Sometimes</MainButtonFocus>
                                    :<MainButton style={style.smallButton} onPress={() => this.handleSelection('sometimes')}>Sometimes</MainButton>}
                            </View>
                            <View style={style.buttonContainer}>
                                {this.state.study == 'often' ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('often')}>Often</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleSelection('often')}>Often</MainButton>}

                                {this.state.study == 'very often' ?   
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('very often')}>Very often</MainButtonFocus>
                                    :<MainButton style={style.smallButton} onPress={() => this.handleSelection('very often')}>Very often</MainButton>}
                            </View>
                        </View>
                    </View> 
    
                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={12}/>
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

SignUp12.navigationOptions = (navigationData) => {
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
        justifyContent:"flex-end",
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
});