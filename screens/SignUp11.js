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

export default class SignUp11 extends Component {

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
            workoutPreferences : '',
        }
    }

    handleSelection = choice => {
        this.setState({workoutPreferences : choice})
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
            workoutPreferences : this.state.workoutPreferences
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        if (!this.state.workoutPreferences){
            Alert.alert("Please select an answer !")
        } 
        else {
            if (this.state.student){
                this.props.navigation.navigate({routeName : 'SignUp12', params : params})
            }
            else {
                this.props.navigation.navigate({routeName : 'SignUp14', params : params})
            }
        }
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp10', params : params})
    }
    
    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                            <Title>You {this.state.workout} workout.</Title>
                        </View>
                        <View style={style.container}>
                            <Title>When do you prefer to workout ?</Title>
                            <View style={style.buttonContainer}>
                                {this.state.workoutPreferences == 'mornings' ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('mornings')}>Mornings</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleSelection('mornings')}>Mornings</MainButton>}

                                {this.state.workoutPreferences == '6-8 pm' ?   
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('6-8 pm')}>6-8 pm</MainButtonFocus>
                                    :<MainButton style={style.smallButton} onPress={() => this.handleSelection('6-8 pm')}>6-8 pm</MainButton>}
                            </View>
                            <View style={style.buttonContainer}>
                                {this.state.workoutPreferences == 'weekends' ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('weekends')}>Weekends</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleSelection('weekends')}>Weekends</MainButton>}

                                {this.state.workoutPreferences == 'late night' ?   
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleSelection('late night')}>Late night</MainButtonFocus>
                                    :<MainButton style={style.smallButton} onPress={() => this.handleSelection('late night')}>Late night</MainButton>}
                            </View>
                        </View>
                    </View>

                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={11}/>
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

SignUp11.navigationOptions = () => {
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
        height:200,
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