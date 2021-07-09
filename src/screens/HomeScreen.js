import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
          console.log('Tombol tertekan');
        }}
      />
    </View>
  );
};

export default Home;
