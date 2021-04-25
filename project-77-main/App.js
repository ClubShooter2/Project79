import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogin from './screens/SignUpLogin';
import WelcomeScreen from './screens/welcomescreens';
export default class  App extends React.Component{
    render(){
  return (
    <View style={styles.container}>
    <SignUpLogin/>
    <WelcomeScreen/>
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});