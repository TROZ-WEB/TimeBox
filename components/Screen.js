import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const Screen = props => {
    return(
        <View style={{...style.screen,...style.props}}>
            <ImageBackground source={require('../assets/images/bg.jpg')} style={{...style.backgroundImage,...props.backgroundImage}}>
                <View style={style.space}>
                    {props.children}
                </View>
            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create ({
    screen : {
        flex : 1,
    },
    backgroundImage : {
        width: '100%', 
        height: '100%',
    },
    space : {
        paddingHorizontal: '10%',
        paddingTop : '10%',
        flex : 1,
    }
});

export default Screen;