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

export default class SignUp3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'time',
            weekdaysWakeUp : this.props.navigation.getParam('weekdaysWakeUp'),
            weekdaysSleep : this.props.navigation.getParam('weekdaysSleep'),
            weekendsWakeUp: ''
        }
    }

    handleTimeSelected = time => {
        this.setState({weekendsWakeUp : time})
    };

    handleTimePicked = time => {
        time = moment(time);
        var pickedTime = time.format("HH:mm");
        this.setState({weekendsWakeUp : pickedTime});
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
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        this.state.weekendsWakeUp ?
            this.props.navigation.navigate({routeName : 'SignUp4', params : params})
            : Alert.alert("Please select a wake up time !")
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp2', params : params})
    }

    render (){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>
                        <Header>Set up</Header>
                        <View style={style.container}>
                        <Title>On weekends (sat-sun), At what time do you usually wake-up ?</Title>
                            <View style={style.buttonContainer}>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('09:00')}>9 am</MainButton>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('10:00')}>10 am</MainButton>
                                <MainButton style={style.smallButton} onPress={() => this.handleTimeSelected('11:00')}>11 am</MainButton>
                            </View>
                            <View style = {style.buttonContainer}>
                                <MainButton style={style.largeButton} onPress={this.showDateTimePicker}>
                                    {this.state.weekendsWakeUp ? 'You wake up at : ' + this.state.weekendsWakeUp : 'Custom'}
                                </MainButton>
                            </View>
                        </View>
                    </View> 
                    
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleTimePicked}
                        onCancel={this.hideDateTimePicker}
                        mode={this.state.mode}
                        date={moment(moment().format("YYYY-MM-DD") + " " + "09:00", "YYYY-MM-DD HH:mm").toDate()}
                    /> 
    
                    <View style = {style.nextButtonContainer}>
                        <ProgressBar page={3}/>
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

SignUp3.navigationOptions = () => {
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