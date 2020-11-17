import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Header from "../components/Header";
import MainButton from "../components/MainButton";
import RightArrowButton from "../components/RightArrowButton";
import LeftArrowButton from "../components/LeftArrowButton";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";
import { NavigationEvents } from 'react-navigation';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class SignUp4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'time',
            weekdaysWakeUp : this.props.navigation.getParam('weekdaysWakeUp'),
            weekdaysSleep : this.props.navigation.getParam('weekdaysSleep'),
            weekendsWakeUp: this.props.navigation.getParam('weekendsWakeUp'),
            weekendsSleep: ''
        }
    }

    handleTimeSelected = time => {
        this.setState({weekendsSleep : time})
    };

    handleTimePicked = time => {
        time = moment(time);
        var pickedTime = time.format("HH:mm");
        this.setState({weekendsSleep : pickedTime});
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
            weekdaysSleep : this.state.weekdaysSleep,
            weekendsWakeUp : this.state.weekendsWakeUp,
            weekendsSleep : this.state.weekendsSleep
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        this.state.weekendsSleep ?
            this.props.navigation.navigate({routeName : 'SignUp5', params : params})
            : Alert.alert("Please select a sleep time !")
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp3', params : params})
    }
    
    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                            <Title>On weekdays (mon-fri), you usually wake up at {this.state.weekendsWakeUp}.</Title>
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
                                    {this.state.weekendsSleep ? 'You sleep at : ' + this.state.weekendsSleep : 'Custom'}
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
                        <ProgressBar page={4}/>
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

SignUp4.navigationOptions = () => {
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