import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

const Settings = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(true);

  const settingsSection = [
    {
      title: 'Notifications',
      items: [
        {
          title: 'Push Notifications',
          icon: 'notifications' as MaterialIconName,
          value: pushNotifications,
          onToggle: setPushNotifications,
          type: 'toggle' as const,
        },
        {
          title: 'Email Notifications',
          icon: 'email' as MaterialIconName,
          value: emailNotifications,
          onToggle: setEmailNotifications,
          type: 'toggle' as const,
        },
      ],
    },
    {
      title: 'Appearance',
      items: [
        {
          title: 'Dark Mode',
          icon: 'dark-mode' as MaterialIconName,
          value: darkMode,
          onToggle: setDarkMode,
          type: 'toggle' as const,
        },
      ],
    },
    {
      title: 'Security',
      items: [
        {
          title: 'Biometric Login',
          icon: 'fingerprint' as MaterialIconName,
          value: biometric,
          onToggle: setBiometric,
          type: 'toggle' as const,
        },
        {
          title: 'Change Password',
          icon: 'lock' as MaterialIconName,
          type: 'navigation' as const,
        },
        {
          title: 'Two-Factor Authentication',
          icon: 'security' as MaterialIconName,
          type: 'navigation' as const,
        },
      ],
    },
    {
      title: 'General',
      items: [
        {
          title: 'Language',
          icon: 'language' as MaterialIconName,
          type: 'navigation' as const,
        },
        {
          title: 'About',
          icon: 'info' as MaterialIconName,
          type: 'navigation' as const,
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Settings</Text>

        {settingsSection.map((section, sectionIndex) => (
          <View key={sectionIndex} className="mb-6 bg-white rounded-lg shadow-sm">
            <Text className="p-4 text-lg font-semibold text-gray-800 border-b border-gray-100">
              {section.title}
            </Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} className="flex-row items-center p-4 border-b border-gray-100 last:border-b-0">
                <MaterialIcons name={item.icon} size={20} color="#6200ee" style={{ marginRight: 12 }} />
                <Text className="flex-1 text-base text-gray-800">{item.title}</Text>
                {item.type === 'toggle' ? (
                  <Switch
                    value={item.value}
                    onValueChange={item.onToggle}
                    trackColor={{ false: '#ccc', true: '#6200ee' }}
                    thumbColor={item.value ? '#fff' : '#f4f3f4'}
                  />
                ) : (
                  <MaterialIcons name="chevron-right" size={20} color="#ccc" />
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
