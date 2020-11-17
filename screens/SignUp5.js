import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView, FlatList } from 'react-native';

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
import moment from 'moment';

import colors from '../constants/colors';
import { AuthSession } from 'expo';

export default class SignUp5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'time',
            pickFlag: 0,        // 0 -> Wake up, 1 -> Sleep
            chosenDay : 0,
            day : [
                {name : 'Mon.', id : 0},
                {name : 'Tue.', id : 1},
                {name : 'Wed.', id : 2},
                {name : 'Thu.', id : 3},
                {name : 'Fri.', id : 4},
                {name : 'Sat.', id : 5},
                {name : 'Sun.', id : 6},
                ],
            wakeUp: [
                this.props.navigation.getParam('weekdaysWakeUp'),
                this.props.navigation.getParam('weekdaysWakeUp'),
                this.props.navigation.getParam('weekdaysWakeUp'),
                this.props.navigation.getParam('weekdaysWakeUp'),
                this.props.navigation.getParam('weekdaysWakeUp'),

                this.props.navigation.getParam('weekendsWakeUp'),
                this.props.navigation.getParam('weekendsWakeUp')
            ],
            sleep: [
                this.props.navigation.getParam('weekdaysSleep'),
                this.props.navigation.getParam('weekdaysSleep'),
                this.props.navigation.getParam('weekdaysSleep'),
                this.props.navigation.getParam('weekdaysSleep'),
                this.props.navigation.getParam('weekdaysSleep'),

                this.props.navigation.getParam('weekendsSleep'),
                this.props.navigation.getParam('weekendsSleep')
            ],
            currentTime: ''
        }
    }

    handleTimePicked = time => {
        time = moment(time);
        var pickedTime = time.format("HH:mm");
        if (this.state.pickFlag == 0) {
            let wakeUpUpdate = this.state.wakeUp;
            wakeUpUpdate[this.state.chosenDay] = pickedTime;
            this.setState({ wakeUp: wakeUpUpdate });
        } else {
            sleepUpdate = this.state.sleep;
            sleepUpdate[this.state.chosenDay] = pickedTime;
            this.setState({ sleep: sleepUpdate });
        }
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
            wakeUp : this.state.wakeUp, 
            sleep : this.state.sleep
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        this.props.navigation.navigate({routeName : 'SignUp6', params : params})
    }

    handlePrevious = params => {
        this.props.navigation.navigate({routeName : 'SignUp4', params : params})
    }

    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>

                        <Header>Set up</Header>

                        <View style={style.scrollContainer}>
                            <View style={style.topTextContainer}>
                                <P></P>
                                <P style={style.topText}>Wake up</P>
                                <P style={style.topText}>Sleep</P>
                            </View>
                            
                            <ScrollView style={style.scroll}>
                                <View style={style.container}>
                                    {this.state.day.map(day => (
                                        <View key={day.id} style={style.buttonContainer}>

                                            <Title style={style.title}>{day.name} :</Title>

                                            <MainButton onPress={() => {
                                                this.setState({pickFlag: 0, chosenDay : day.id, currentTime : this.state.wakeUp[day.id]});
                                                this.showDateTimePicker();
                                            }}>
                                                {this.state.wakeUp[day.id]}
                                            </MainButton>

                                            <MainButton onPress={() => {
                                                this.setState({pickFlag: 1, chosenDay : day.id, currentTime : this.state.sleep[day.id]});
                                                this.showDateTimePicker();
                                            }}>
                                                {this.state.sleep[day.id]}
                                            </MainButton>

                                        </View>
                                    ))}
                                </View>
                            </ScrollView> 
                        </View>


                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleTimePicked}
                            onCancel={this.hideDateTimePicker}
                            mode={this.state.mode}
                            date={moment(moment().format("YYYY-MM-DD") + " " + this.state.currentTime, "YYYY-MM-DD HH:mm").toDate()}
                        />       
    
                        <View style = {style.nextButtonContainer}>
                            <ProgressBar page={5}/>
                            <View style = {style.buttonContainer}>
                                <LeftArrowButton style={style.nextButton} onPress={() => this.provideParams("previous")}>Previous</LeftArrowButton>
                                <RightArrowButton style={style.nextButton} onPress={() => this.provideParams("next")}>Next</RightArrowButton>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };
};

SignUp5.navigationOptions = () => {
    return {
        headerShown : false,
    };
}

const style = StyleSheet.create ({
    screen : {
        flex : 1,
    },
    timeContainer:{
        borderColor:colors.Button,
        borderWidth : 1,
        borderRadius: 10,
    },
    datePickerContainer:{
        height : 300,
        justifyContent: 'flex-end',
        backgroundColor : 'white',
        borderTopWidth : 1,
        borderColor : '#ccc'
    },
    contentContainer:{
        flex : 1,
    },
    container:{
        flex : 1,
        paddingHorizontal : "10%",
    },
    scrollContainer : {
        flex : 5,
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
    topTextContainer:{
        flexDirection : 'row',
        justifyContent : "space-between",
        marginVertical : 10,
        width : "100%",
    },
    topText:{
        width : "34%",
    },
    title:{
        width : "25%",
    },
});