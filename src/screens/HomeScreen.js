import React from 'react';
import {Button, StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = props => {
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

export default HomeScreen;
