import { db } from "@/firebase";
import { Task } from "@/types/task";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

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


export const updateTask =  (id: string,task : Task) => {
  const { id: _id, ...taskData } = task; // remove id

  const updateRef = doc(db, "tasks", id);
  // title , description , createdAt ,id
  return updateDoc(updateRef, {
    title: task.title,
    description: task.description,
    createdAt: task.createdAt,
  });

  //   return updateDoc(updateRef, taskData); // <--- Uncomment this line to use taskData
}



export const deleteTask = (id: string) => {
  const deleteRef = doc(db, "tasks", id);
  return deleteDoc(deleteRef);
};


export const getTaskById = async (id: string) => {
  try {
    const docRef = doc(db, "tasks", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title,
        description: data.description ?? "",
        createdAt: data.createdAt ?? null,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching task from Firestore:", error);
    throw new Error("Failed to fetch task");
  }
}
