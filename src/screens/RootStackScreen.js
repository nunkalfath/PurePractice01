import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="SignInScreen"
      component={SignInScreen}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="SignUpScreen"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
