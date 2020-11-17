import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, ScrollView } from 'react-native';

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

export default class SignUp7 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wakeUp : this.props.navigation.getParam('wakeUp'),
            sleep : this.props.navigation.getParam('sleep'),
            job: this.props.navigation.getParam('job'),
            student: this.props.navigation.getParam('student'),
            hobby: this.props.navigation.getParam('hobby'),
            mode: 'time',
            pickFlag: 0,        // 0 -> Start, 1 -> End
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
            start: [
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            ],
            end: [
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            ],
            currentTime: ''
        }
    }

    handleTimePicked = time => {
        time = moment(time);
        var pickedTime = time.format("HH:mm");
        endTime = moment(time).add(8, 'hours').format("HH:mm");
        startTime = moment(time).subtract(8, 'hours').format("HH:mm");
        startUpdate = this.state.start;
        endUpdate = this.state.end;

        if (this.state.pickFlag == 0) {
            startUpdate[this.state.chosenDay] = pickedTime;
            this.setState({ start: startUpdate });

            if (!endUpdate[this.state.chosenDay]){
                endUpdate[this.state.chosenDay] = endTime;
                this.setState({ end: endUpdate });
            }
        } else {
            endUpdate[this.state.chosenDay] = pickedTime;
            this.setState({ end: endUpdate });

            if (!startUpdate[this.state.chosenDay]){
                startUpdate[this.state.chosenDay] = startTime;
                this.setState({ start: startUpdate });
            }
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
            sleep : this.state.sleep,
            job : this.state.job,
            student : this.state.student,
            hobby : this.state.hobby,
            studentStart : this.state.start, 
            studentEnd : this.state.end
        }

        if (props == "next"){
            return this.handleNext(params)
        }
        else if (props == "previous"){
            return this.handlePrevious(params)
        }
    }

    handleNext = params => {
        if (this.state.job){
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
        this.props.navigation.navigate({routeName : 'SignUp6', params : params})
    }

    render(){
        return(
            <View style={style.screen}>
                <ImageBackground source={require('../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>
                    <View style={style.contentContainer}>

                        <Header>Set up</Header>

                        <View style={style.scrollContainer}>
                                
                            <Title style={style.topTitle}>Student schedule :</Title>
                            
                            <View style={style.topTextContainer}>
                                <P style={style.topText}>Start</P>
                                <P style={style.topText}>End</P>
                            </View>

                            <ScrollView style={style.scroll}>
                                <View style={style.container}>
                                    {this.state.day.map(day => (
                                        <View key={day.id} style={style.buttonContainer}>

                                            <Title style={style.title}>{day.name} :</Title>

                                            <MainButton onPress={() => {
                                                this.setState({pickFlag: 0, chosenDay : day.id, currentTime : "09:00"});
                                                this.showDateTimePicker();
                                            }}>
                                                {this.state.start[day.id] ? this.state.start[day.id] : "Add" }
                                            </MainButton>

                                            <MainButton onPress={() => {
                                                this.setState({pickFlag: 1, chosenDay : day.id, currentTime : "17:00"});
                                                this.showDateTimePicker();
                                            }}>
                                                {this.state.end[day.id] ? this.state.end[day.id] : "Add"}
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
                            <ProgressBar page={7}/>
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

SignUp7.navigationOptions = () => {
    return {
        headerShown : false,
    };
}

const style = StyleSheet.create ({
    screen : {
        flex : 1,
    },
    title:{
        width : "25%",
    },
    scrollContainer : {
        flex : 5,
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
        flex : 5,
        paddingHorizontal : "10%",
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
    scrollContainer : {
        flex : 5,
    },
    topTextContainer:{
        flexDirection : 'row',
        justifyContent : "flex-end",
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