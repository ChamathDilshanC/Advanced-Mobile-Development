import { db } from "@/firebase";
import { Task } from "@/types/task";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const getTasks = async (): Promise<Task[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks: Task[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      tasks.push({
        id: doc.id,
        title: data.title,
        description: data.description ?? "",
        createdAt: data.createdAt ?? null,
      });
    });
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks from Firestore:", error);
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
    const createdAt = Date.now();
    const docRef = await addDoc(collection(db, "tasks"), {
      title: task.title,
      description: task.description ?? "",
      createdAt,
    });
    return {
      id: docRef.id,
      title: task.title,
      description: task.description ?? "",
      createdAt,
    };
  } catch (error) {
    console.error("Error adding task to Firestore:", error);
    throw new Error("Failed to add task");
  }
};


export const updateTask =  () => {
  
}
