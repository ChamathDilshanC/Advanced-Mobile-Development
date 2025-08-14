import { Tabs } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
};


export default DashboardLayout;
