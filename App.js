import { avataaars } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SvgCss} from 'react-native-svg';


export default function App() {

  let avatar = createAvatar(avataaars, {
    seed: 'John Doe',
    style:['circle']
    // ... other options
  });
  
  const svg = avatar.toString();

  return (
    <View style={styles.container}>
                      <SvgCss xml={svg} width={300} height={300}/>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
