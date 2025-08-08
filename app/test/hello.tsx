import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const hello = () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default hello;
