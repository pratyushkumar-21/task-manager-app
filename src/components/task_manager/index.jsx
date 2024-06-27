import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import TaskList from "./TaskList";
import NavBar from "./NavBar";
import { TaskManagerContext } from "./context";
import { getTasks } from "./utils";

export default function TaskManager() {
  const [tasks, setTasks] = useState(getTasks());

  return (
    <TaskManagerContext.Provider value={{ tasks, setTasks }}>
      <Container fluid>
        <Stack gap={3} className="m-4">
          <NavBar />
          <TaskList />
        </Stack>
      </Container>
    </TaskManagerContext.Provider>
  );
}
