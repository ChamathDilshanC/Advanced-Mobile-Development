import { Tabs } from "expo-router";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const DashboardLayout = () => {
  const tabs: { label: string; icon: MaterialIconName; name: string }[] = [
    { label: "Dashboard", icon: "flutter-dash", name: "dashboard" },
    { label: "Tasks", icon: "add-task", name: "tasks" },
    { label: "Profile", icon: "account-circle", name: "profile" },
    { label: "Settings", icon: "settings-suggest", name: "settings" },
    { label: "Notifications", icon: "notifications", name: "notifications" },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#fff" },
        headerShown: false,
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      {tabs.map(({ label, icon, name }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarLabel: label,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name={icon} size={24} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default DashboardLayout;
