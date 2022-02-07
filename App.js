import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home'
import React from "react";
import {createMaterialTopTabNavigator, MaterialTopTabBar} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Popular from './screens/popular'
import Reccomendation from './screens/reccomendation';
import RFValue from 'react-native-responsive-fontsize'

export default function App() {
  return(
    <AppContainer>
      
    </AppContainer>
  );
}

const appTopNavigator = createMaterialTopTabNavigator({
  reccomended: {
    screen: Reccomendation,
    navigationOptions: {
      tabBarLabel: "reccomended",
      tabBarOptions: {
        tabStyle: {backgroundColor: 'white'},
        labelStyle: {color: 'black'},
      }}
  },
  popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: "popular",
      tabBarOptions: {
        tabStyle: {backgroundColor: 'white'},
        labelStyle: {color: 'black'}
    }}
  },
})

const appStackNavigator = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {headerShown: false},
  },
  appTopNavigator:{
    screen: appTopNavigator,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: 'white',
      headerTitle: "articles",
      headerStyle: {backgroundColor: 'blue'},
      headerTitleStyle: {color: "white"},
      fontWeight: "bold",
      fontSize: RFValue(18)
    }
  }
},
{initialRouteName: "home"})

const appContainer = creatAppContainer(appStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
