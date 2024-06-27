import { Stack } from "react-bootstrap";
import { useState } from "react";

import TaskList from "./TaskList";
import DataTransformer from "./DataTrasnformer";

import { data } from "./utils";

export default function TaskManager() {
  const [tasks, setTask] = useState(data);

  return (
    <Stack gap={3} className="m-4">
      <DataTransformer />
      <TaskList tasks={tasks} />
    </Stack>
  );
}
