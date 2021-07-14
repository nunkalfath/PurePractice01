import React from 'react';
import {View, Text, Button} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <Text>Splash Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
          console.log('Kembali ke Home');
        }}
      />
    </View>
  );
};

export default SplashScreen;
