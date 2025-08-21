import { useLoader } from "@/context/LoaderContext";
import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "@/services/taskservice";
import { Task } from "@/types/task";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const TaskScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const { showLoader, hideLoader } = useLoader();

  // Get task by ID
  const handleGetTaskById = async (id: string) => {
    showLoader();
    setError(null);
    try {
      const task = await getTaskById(id);
      if (task) {
        setEditTitle(task.title);
        setEditDescription(task.description);
        setEditingTaskId(task.id);
      } else {
        setError("Task not found");
      }
    } catch (error) {
      setError("Failed to fetch task. Please try again.");
    } finally {
      hideLoader();
    }
  };

  // Edit task
  const handleEditTask = async () => {
    if (!editingTaskId) return;
    if (!editTitle.trim()) {
      setError("Task title is required");
      return;
    }
    showLoader();
    setError(null);
    try {
      await updateTask(editingTaskId, {
        id: editingTaskId,
        title: editTitle,
        description: editDescription,
        createdAt: Date.now(),
      });
      Alert.alert("Success", "Task updated successfully");
      setEditingTaskId(null);
      setEditTitle("");
      setEditDescription("");
      await handleFetchData();
    } catch (error) {
      setError("Failed to update task. Please try again.");
    } finally {
      hideLoader();
    }
  };

  // Delete task
  const handleDeleteTask = async (id: string) => {
    showLoader();
    setError(null);
    try {
      await deleteTask(id);
      Alert.alert("Success", "Task deleted successfully");
      await handleFetchData();
    } catch (error) {
      setError("Failed to delete task. Please try again.");
    } finally {
      hideLoader();
    }
  };

  // Fetch tasks from REST API
  const handleFetchData = async () => {
    showLoader();
    setError(null);
    try {
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      setError("Failed to load tasks. Please try again.");
    } finally {
      hideLoader();
    }
  };

  // Add a new task using REST API
  const handleAddTask = async () => {
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    showLoader();
    setError(null); // Clear previous errors
    try {
      await addTask({ title, description });
      Alert.alert("Success", "Task added successfully");
      setTitle("");
      setDescription("");
      await handleFetchData();
    } catch (error) {
      console.error("Add task error:", error);
      setError("Failed to add task. Please try again.");
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const formatDate = (timestamp?: number) => {
    return Number.isFinite(timestamp)
      ? new Date(timestamp!).toLocaleString()
      : "No date";
  };

  return (
    <SafeAreaView className="flex-1 mt-5 bg-gradient-to-b from-blue-50 to-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="mb-6 mt-9">
          <Text className="mb-4 text-2xl font-bold text-center text-blue-700">
            Task Manager
          </Text>
          {editingTaskId ? (
            <View className="p-4 mb-4 bg-white shadow rounded-xl">
              <TextInput
                className="p-3 mb-3 text-base border border-blue-300 rounded-lg"
                placeholder="Edit task title"
                value={editTitle}
                onChangeText={setEditTitle}
                placeholderTextColor="#60A5FA"
              />
              <TextInput
                className="p-3 mb-3 text-base border border-blue-300 rounded-lg"
                placeholder="Edit description (optional)"
                value={editDescription}
                onChangeText={setEditDescription}
                placeholderTextColor="#60A5FA"
              />
              <View className="flex-row justify-between">
                <Button
                  color="#2563EB"
                  title="Update Task"
                  onPress={handleEditTask}
                />
                <Button
                  color="#64748B"
                  title="Cancel"
                  onPress={() => {
                    setEditingTaskId(null);
                    setEditTitle("");
                    setEditDescription("");
                  }}
                />
              </View>
            </View>
          ) : (
            <View className="p-4 mb-4 bg-white shadow rounded-xl">
              <TextInput
                className="p-3 mb-3 text-base border border-blue-300 rounded-lg"
                placeholder="Task title"
                value={title}
                onChangeText={setTitle}
                placeholderTextColor="#60A5FA"
              />
              <TextInput
                className="p-3 mb-3 text-base border border-blue-300 rounded-lg"
                placeholder="Description (optional)"
                value={description}
                onChangeText={setDescription}
                placeholderTextColor="#60A5FA"
              />
              <Button
                color="#2563EB"
                title="Add Task"
                onPress={handleAddTask}
              />
            </View>
          )}
        </View>

        {loading && (
          <Text className="text-base text-center text-blue-500">
            Loading...
          </Text>
        )}
        {error && (
          <Text className="mb-2 text-base text-center text-red-500">
            {error}
          </Text>
        )}

        {!loading && !error && tasks.length > 0
          ? tasks.map((task) => (
              <View
                key={task.id}
                className="flex-col p-4 mb-4 bg-white shadow rounded-xl"
              >
                <Text className="mb-1 text-lg font-semibold text-blue-700">
                  {task.title}
                </Text>
                <Text className="mb-2 text-gray-700">
                  {task.description || "No description"}
                </Text>
                <Text className="mb-2 text-xs text-gray-400">
                  {formatDate(task.createdAt)}
                </Text>
                <View className="flex-row justify-end space-x-2">
                  <Button
                    color="#2563EB"
                    title="Edit"
                    onPress={() => {
                      if (typeof task.id === "string")
                        handleGetTaskById(task.id);
                    }}
                  />
                  <Button
                    color="#DC2626"
                    title="Delete"
                    onPress={() => {
                      if (typeof task.id === "string")
                        handleDeleteTask(task.id);
                    }}
                  />
                </View>
              </View>
            ))
          : !loading &&
            !error && (
              <Text className="text-base text-center text-gray-500">
                No tasks found
              </Text>
            )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;
