import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import MainButtonFocus from "../components/MainButtonFocus";
import RightArrowButton from "../components/RightArrowButton";
import LeftArrowButton from "../components/LeftArrowButton";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";
import { NavigationEvents } from 'react-navigation';

export default class SignUp6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wakeUp : this.props.navigation.getParam('wakeUp'),
            sleep : this.props.navigation.getParam('sleep'),
            job: '',
            student: '',
            hobby: '',
        }
    }

    handleStudentSelected = bool => {
        this.setState({student : bool})
    };

    handleJobSelected = bool => {
        this.setState({job : bool})
    };

    handleHobbySelected = bool => {
        this.setState({hobby : bool})
    };

    provideParams = props => {

        let params = {
            wakeUp : this.state.wakeUp, 
            sleep : this.state.sleep,
            job : this.state.job,
            student : this.state.student,
            hobby : this.state.hobby
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        if ((this.state.student === '') || (this.state.job === '') || (this.state.hobby === '')){
            Alert.alert("Please select an answer for each question !")
        }
        else if (this.state.student) {
            this.props.navigation.navigate({routeName : 'SignUp7', params : params})
        }
        else if (this.state.job){
            this.props.navigation.navigate({routeName : 'SignUp8', params : params})
        }
        else if (this.state.hobby){
            this.props.navigation.navigate({routeName : 'SignUp9', params : params})
        }
        else {
            this.props.navigation.navigate({routeName : 'SignUp10', params : params})
        }
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp5', params : params})
    }

    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>

                            <Title>Are you a student ?</Title>
                            <View style = {style.buttonContainer}>
                                {this.state.student === true ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleStudentSelected(true)}>Yes</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleStudentSelected(true)}>Yes</MainButton>}
                                {this.state.student === false ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleStudentSelected(false)}>No</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleStudentSelected(false)}>No</MainButton>}
                            </View>

                            <Title>Do you happend to have a job ?</Title>
                            <View style = {style.buttonContainer}>
                                {this.state.job === true ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleJobSelected(true)}>Yes</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleJobSelected(true)}>Yes</MainButton>}
                                {this.state.job === false ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleJobSelected(false)}>No</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleJobSelected(false)}>No</MainButton>}
                            </View>

                            <Title>Do you have another specific hobby ?</Title>
                            <View style = {style.buttonContainer}>
                                {this.state.hobby === true ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleHobbySelected(true)}>Yes</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleHobbySelected(true)}>Yes</MainButton>}
                                {this.state.hobby === false ?
                                    <MainButtonFocus style={style.smallButton} onPress={() => this.handleHobbySelected(false)}>No</MainButtonFocus>
                                    : <MainButton style={style.smallButton} onPress={() => this.handleHobbySelected(false)}>No</MainButton>}
                            </View>

                        </View>
                    </View>            
    
                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={6}/>
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

SignUp6.navigationOptions = () => {
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
});