import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const settings = () => {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
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

export default settings;
