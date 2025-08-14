import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
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

export default profile;
