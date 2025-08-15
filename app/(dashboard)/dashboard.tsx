import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const Dashboard = () => {
  const stats: {
    title: string;
    value: string;
    icon: MaterialIconName;
    color: string;
  }[] = [
    { title: "Total Tasks", value: "24", icon: "assignment", color: "#6200ee" },
    { title: "Completed", value: "18", icon: "check-circle", color: "#4caf50" },
    { title: "Pending", value: "6", icon: "schedule", color: "#ff9800" },
    {
      title: "Notifications",
      value: "3",
      icon: "notifications",
      color: "#f44336",
    },
  ];

  const recentActivities = [
    'Task "Design UI" completed',
    "New notification received",
    "Settings updated",
    "Profile picture changed",
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Dashboard</Text>

        {/* Stats Grid */}
        <View className="flex-row flex-wrap justify-between mb-6">
          {stats.map((stat, index) => (
            <View
              key={index}
              className="w-[48%] bg-white p-4 rounded-lg shadow-sm mb-3"
            >
              <View className="flex-row items-center justify-between">
                <View>
                  <Text
                    className="text-2xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </Text>
                  <Text className="text-sm text-gray-600">{stat.title}</Text>
                </View>
                <MaterialIcons name={stat.icon} size={24} color={stat.color} />
              </View>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="p-4 bg-white rounded-lg shadow-sm">
          <Text className="mb-3 text-lg font-semibold text-gray-800">
            Recent Activity
          </Text>
          {recentActivities.map((activity, index) => (
            <View key={index} className="flex-row items-center py-2">
              <View className="w-2 h-2 mr-3 bg-blue-500 rounded-full" />
              <Text className="text-gray-600">{activity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
