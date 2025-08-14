import { Tabs } from "expo-router";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const DashboardLayout = () => {
  const tabs: { label: string; icon: MaterialIconName; name: string }[] = [
    { label: "Profile", icon: "account-circle", name: "profile" },
    { label: "Settings", icon: "settings-suggest", name: "settings" },
    { label: "Dashboard", icon: "flutter-dash", name: "dashboard" },
    { label: "Tasks", icon: "add-task", name: "tasks" },
  ];

  return (
    <Tabs>
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
