import { fetchTasks } from "../services";

export default function useTasksList() {
    const tasksList = fetchTasks();
    return tasksList;
}