import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const Notifications = () => {
  const notifications: {
    id: string;
    title: string;
    message: string;
    time: string;
    type: "info" | "success" | "warning" | "error";
    icon: MaterialIconName;
    read: boolean;
  }[] = [
    {
      id: "1",
      title: "Task Completed",
      message: 'Your task "Design UI" has been completed successfully',
      time: "2 min ago",
      type: "success",
      icon: "check-circle",
      read: false,
    },
    {
      id: "2",
      title: "New Assignment",
      message: 'You have been assigned a new task "API Integration"',
      time: "1 hour ago",
      type: "info",
      icon: "assignment",
      read: false,
    },
    {
      id: "3",
      title: "Deadline Reminder",
      message: 'Task "Testing Phase" is due tomorrow',
      time: "3 hours ago",
      type: "warning",
      icon: "schedule",
      read: true,
    },
    {
      id: "4",
      title: "System Update",
      message: "App has been updated to version 2.1.0",
      time: "1 day ago",
      type: "info",
      icon: "system-update",
      read: true,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "warning":
        return "#ff9800";
      case "error":
        return "#f44336";
      default:
        return "#6200ee";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="mb-6 text-2xl font-bold text-gray-800">
          Notifications
        </Text>

        {notifications.map((notification) => (
          <View
            key={notification.id}
            className={`bg-white p-4 rounded-lg shadow-sm mb-3 ${
              !notification.read ? "border-l-4" : ""
            }`}
            style={
              !notification.read
                ? { borderLeftColor: getTypeColor(notification.type) }
                : {}
            }
          >
            <View className="flex-row items-start">
              <MaterialIcons
                name={notification.icon}
                size={24}
                color={getTypeColor(notification.type)}
                style={{ marginRight: 12, marginTop: 2 }}
              />
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-base font-semibold text-gray-800">
                    {notification.title}
                  </Text>
                  {!notification.read && (
                    <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                </View>
                <Text className="text-sm text-gray-600 mb-2">
                  {notification.message}
                </Text>
                <Text className="text-xs text-gray-400">
                  {notification.time}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {notifications.length === 0 && (
          <View className="items-center justify-center py-12">
            <MaterialIcons name="notifications-none" size={48} color="#ccc" />
            <Text className="mt-4 text-gray-500">No notifications yet</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
