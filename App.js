import React, {useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {DrawerContent} from './src/screens/DrawerContent';
import {AuthContext} from './components/context';

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import RootStackScreen from './src/screens/RootStackScreen';
import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        // console.log({ userName }, { password });
        // setUserToken('inung');
        // setIsLoading(false);
        // let userToken;
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
        console.log('Sign Out tertekan');
      },
      signUp: () => {
        // setUserToken('inung');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme( isDarkTheme => !isDarkTheme );
      },
      isDarkTheme,
    }),
    [isDarkTheme],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: 'Inung'});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <ActivityIndicator size="large" /> */}
        <Text>LOADING Aplikasi</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={PaperDarkTheme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={DarkTheme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="Support" component={SupportScreen} />
              <Drawer.Screen name="Settings" component={SettingsScreen} />
              <Drawer.Screen name="Bookmarks" component={BookmarkScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
