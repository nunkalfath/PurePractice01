import React from 'react';
import {View, Text, Button} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <View>
      <Text>Sign In</Text>
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

export default SignInScreen;
