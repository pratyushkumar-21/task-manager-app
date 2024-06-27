import { useState } from "react";

import TaskList from "./TaskList";
import DataTransformer from "./DataTrasnformer";

import { STATUS, PRIORITY, data } from "./utils";

export default function TaskManager() {
  const [tasks, setTask] = useState(data);

  return (
    <div>
      <DataTransformer />
      <TaskList tasks={tasks} />
    </div>
  );
}
