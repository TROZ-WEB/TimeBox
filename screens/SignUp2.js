import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import RightArrowButton from "../components/RightArrowButton";
import LeftArrowButton from "../components/LeftArrowButton";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";
import { NavigationEvents } from 'react-navigation';

export default class SignUp2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'time',
            weekdaysWakeUp : this.props.navigation.getParam('weekdaysWakeUp'),
            weekdaysSleep: ''
        }
    }

    handleTimeSelected = time => {
        this.setState({weekdaysSleep : time})
    };

    handleTimePicked = time => {
        time = moment(time);
        var pickedTime = time.format("HH:mm");
        this.setState({weekdaysSleep : pickedTime});
        this.hideDateTimePicker();
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    provideParams = props => {

        let params = {
            weekdaysWakeUp : this.state.weekdaysWakeUp, 
            weekdaysSleep : this.state.weekdaysSleep
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        this.state.weekdaysSleep ?
            this.props.navigation.navigate({routeName : 'SignUp3', params : params})
            : Alert.alert("Please select a sleep time !")
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp1', params : params})
    }
    
    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                            <Title>On weekdays (mon-fri), you usually wake up at {this.state.weekdaysWakeUp}.</Title>
                        </View>
                        <View style={style.container}>
                            <Title>At what time do you usually sleep ?</Title>
                            <View style={style.buttonContainer}>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('22:00')}>10 pm</MainButton>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('23:00')}>11 pm</MainButton>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('00:00')}>12 am</MainButton>
                            </View>
                            <View style = {style.buttonContainer}>
                                <MainButton style={style.largeButton} onPress={this.showDateTimePicker}>
                                    {this.state.weekdaysSleep ? 'You sleep at : ' + this.state.weekdaysSleep : 'Custom'}
                                </MainButton>
                            </View>
                        </View>
                    </View>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleTimePicked}
                        onCancel={this.hideDateTimePicker}
                        mode={this.state.mode}
                        date={moment(moment().format("YYYY-MM-DD") + " " + "23:00", "YYYY-MM-DD HH:mm").toDate()}
                    />            

                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={2}/>
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

SignUp2.navigationOptions = () => {
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