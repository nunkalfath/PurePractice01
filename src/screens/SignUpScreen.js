import React from 'react'
import { View, Text, Button } from 'react-native'

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
          console.log('Kembali ke Home');
        }}
      />
    </View>
  );
}

export default SignUpScreen
