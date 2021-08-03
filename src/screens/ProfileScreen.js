import React from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>My Profile</Text>
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

export default ProfileScreen;
