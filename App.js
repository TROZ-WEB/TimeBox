import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpNavigator from './navigation/SignUpNavigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
    'montserrat' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return(
      <AppLoading startAsync={fetchFonts} onFinish={()=>setFontLoaded(true)}/>
    );
  }

  return (
    <SignUpNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
