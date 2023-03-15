import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/navigation/routes'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('splas screen called.....')
      SplashScreen.hide();
    }, 2500);
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})