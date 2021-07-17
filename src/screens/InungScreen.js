import React from 'react';
import {View, Text, Button} from 'react-native';

const InungScreen = () => {
  return (
    <View>
      <Text>Salam</Text>
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

export default InungScreen;
