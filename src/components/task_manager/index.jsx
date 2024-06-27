import { useState, createContext } from "react";
import { Stack } from "react-bootstrap";
import TaskList from "./TaskList";
import DataTransformer from "./DataTrasnformer";
import { TaskManagerContext } from "./context";
import { data } from "./utils";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskManagerContext.Provider value={{ tasks, setTasks }}>
      <Stack gap={3} className="m-4">
        <DataTransformer />
        <TaskList />
      </Stack>
    </TaskManagerContext.Provider>
  );
}
