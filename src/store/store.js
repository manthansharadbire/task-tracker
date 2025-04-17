import { create } from "zustand";

export const useTaskStore = create((set) => {
  return {
    task: "",
    setTask: (newTask) => set({ task: newTask }),
  };
});
