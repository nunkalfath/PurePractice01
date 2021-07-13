import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#008397',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="menu" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#008397',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={20}
            backgroundColor="#008397"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={20}
            backgroundColor="#1f65ff"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#694fad',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={20}
            backgroundColor="#694fad"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#d02860',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    }}>
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="bars"
            size={20}
            backgroundColor="#d02860"
            onPress={() => {
              navigation.openDrawer();
            }}></Icon.Button>
        ),
      }}
    />
  </ExploreStack.Navigator>
);
