import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const Profile = () => {
  const profileItems: {
    title: string;
    value: string;
    icon: MaterialIconName;
  }[] = [
    { title: "Email", value: "john.doe@example.com", icon: "email" },
    { title: "Phone", value: "+1 234 567 8900", icon: "phone" },
    { title: "Location", value: "New York, USA", icon: "location-on" },
    { title: "Department", value: "Engineering", icon: "work" },
  ];

  const actionItems: {
    title: string;
    icon: MaterialIconName;
    color: string;
  }[] = [
    { title: "Edit Profile", icon: "edit", color: "#6200ee" },
    { title: "Privacy Settings", icon: "privacy-tip", color: "#4caf50" },
    { title: "Help & Support", icon: "help", color: "#ff9800" },
    { title: "Sign Out", icon: "logout", color: "#f44336" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Profile</Text>

        {/* Profile Header */}
        <View className="items-center p-6 mb-6 bg-white rounded-lg shadow-sm">
          <View className="items-center justify-center w-20 h-20 mb-4 bg-gray-200 rounded-full">
            <MaterialIcons name="person" size={40} color="#6200ee" />
          </View>
          <Text className="text-xl font-semibold text-gray-800">John Doe</Text>
          <Text className="text-gray-600">Senior Developer</Text>
        </View>

        {/* Profile Information */}
        <View className="mb-6 bg-white rounded-lg shadow-sm">
          <Text className="p-4 text-lg font-semibold text-gray-800 border-b border-gray-100">
            Personal Information
          </Text>
          {profileItems.map((item, index) => (
            <View
              key={index}
              className="flex-row items-center p-4 border-b border-gray-100 last:border-b-0"
            >
              <MaterialIcons
                name={item.icon}
                size={20}
                color="#6200ee"
                style={{ marginRight: 12 }}
              />
              <View className="flex-1">
                <Text className="text-sm text-gray-600">{item.title}</Text>
                <Text className="text-base text-gray-800">{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View className="bg-white rounded-lg shadow-sm">
          <Text className="p-4 text-lg font-semibold text-gray-800 border-b border-gray-100">
            Actions
          </Text>
          {actionItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center p-4 border-b border-gray-100 last:border-b-0"
            >
              <MaterialIcons
                name={item.icon}
                size={20}
                color={item.color}
                style={{ marginRight: 12 }}
              />
              <Text className="flex-1 text-base text-gray-800">
                {item.title}
              </Text>
              <MaterialIcons name="chevron-right" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
