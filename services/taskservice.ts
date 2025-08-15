import api from "./config/api";

interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: number;
}

export const getTasks = async (): Promise<Task[]> => {
  try {
    console.log("getTasks: Making API call...");
    const response = await api.get<Task[]>("/tasks");
    console.log("getTasks: Response status:", response.status);
    console.log("getTasks: Response data:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error in getTasks:", error);
    console.error("Error details:", {
      message: error?.message,
      response: error?.response?.data,
      status: error?.response?.status,
    });
    throw new Error("Failed to fetch tasks");
  }
};

export const addTask = async (task: {
  title: string;
  description?: string;
}): Promise<Task> => {
  try {
    if (!task.title.trim()) {
      throw new Error("Task title is required");
    }
    const response = await api.post<Task>("/tasks", task);
    return response.data;
  } catch (error) {
    console.error("Error in addTask:", error);
    throw new Error("Failed to add task");
  }
};
