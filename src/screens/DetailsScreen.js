import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          navigation.push('Details');
          console.log('Details Again');
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
          console.log('Kembali ke Home');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
          console.log('Kembali ke sebelumnya');
        }}
      />
      <Button
        title="Go to the first screen"
        onPress={() => {
          navigation.popToTop();
          console.log('Kembali ke halaman 1');
        }}
      />
    </View>
  );
};

export default DetailsScreen;
