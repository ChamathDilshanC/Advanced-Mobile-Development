import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import { getTasks, addTask } from "@/services/taskservice";

interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: number;
}

const TaskScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch tasks from API
  const handleFetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      setError("Failed to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const handleAddTask = async () => {
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    setError(null); // Clear previous errors
    try {
      await addTask({ title, description }).then(() => {
        Alert.alert("Success", "Task added successfully");
        setTitle("");
        setDescription("");
        handleFetchData();
      });
    } catch (error) {
      console.error("Add task error:", error);
      setError("Failed to add task. Please try again.");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const formatDate = (timestamp: number) => {
    return Number.isFinite(timestamp)
      ? new Date(timestamp * 1000).toLocaleString()
      : "Invalid date";
  };

  return (
    <SafeAreaView className="flex-1 p-3 mt-10 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="mb-4">
          <TextInput
            className="p-2 mb-3 border border-gray-300 rounded"
            placeholder="Task title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            className="p-2 mb-3 border border-gray-300 rounded"
            placeholder="Description (optional)"
            value={description}
            onChangeText={setDescription}
          />
          <Button title="Add Task" onPress={handleAddTask} />
        </View>

        {loading && (
          <Text className="text-base text-center text-gray-600">
            Loading...
          </Text>
        )}
        {error && (
          <Text className="text-base text-center text-red-500">{error}</Text>
        )}

        {!loading && !error && tasks.length > 0
          ? tasks.map((task) => (
              <View key={task.id} className="p-3 mb-3 bg-gray-100 rounded">
                <Text className="mb-1 text-base font-bold">{task.title}</Text>
                <Text>{task.description || "No description"}</Text>
                <Text className="mt-1.5 text-xs text-gray-500">
                  {formatDate(task.createdAt)}
                </Text>
              </View>
            ))
          : !loading &&
            !error && (
              <Text className="text-base text-center text-gray-600">
                No tasks found
              </Text>
            )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
