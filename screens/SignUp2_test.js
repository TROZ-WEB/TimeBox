import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Alert } from 'react-native';

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

import Screen from "../components/Screen";
import NavButtons from "../components/NavButtons";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import Title from "../components/Title";

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
            <Screen>
                {/* <View style={style.contentContainer}>
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
                />             */}

                <NavButtons page={2}/>
            </Screen>
        );
    }
};

SignUp2.navigationOptions = () => {
    return {
        headerShown : false,
    };
}

const style = StyleSheet.create ({
    contentContainer:{
        height : '80%',
        borderWidth : 1,
    },
    container:{
        justifyContent:"flex-end",
        alignItems : "center",
        borderWidth : 1,
    },
    buttonContainer:{
        flexDirection : 'row',
        justifyContent : "space-between",
        width : "100%",
    },
});