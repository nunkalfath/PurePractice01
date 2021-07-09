import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

// function HomeScreen(props) {
//   const {navigation} = props;
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           navigation.navigate('Details');
//           console.log('Tombol tertekan');
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => {
//           navigation.push('Details');
//           console.log('Details Again');
//         }}
//       />
//       <Button
//         title="Go to Home"
//         onPress={() => {
//           navigation.navigate('Home');
//           console.log('Kembali ke Home');
//         }}
//       />
//       <Button
//         title="Go Back"
//         onPress={() => {
//           navigation.goBack();
//           console.log('Kembali ke sebelumnya');
//         }}
//       />
//       <Button
//         title="Go to the first screen"
//         onPress={() => {
//           navigation.popToTop();
//           console.log('Kembali ke halaman 1');
//         }}
//       />
//     </View>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
