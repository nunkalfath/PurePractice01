import React from 'react';
import {View, Text, Button} from 'react-native';

const SupportScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Support Me Please</Text>
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

export default SupportScreen;
