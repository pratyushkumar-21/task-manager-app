import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import TaskList from "./TaskList";
import NavBar from "./NavBar";
import { TaskManagerContext } from "./context";
import {
  data,
  FILTER_QUERY_PARAM_NAME,
  SORT_QUERY_PARAM_NAME,
} from "./constant";
import { getQueryParameter } from "./utils";

export default function TaskManager() {
  const [tasks, setTasks] = useState(data);

  const filterByQueryParam = getQueryParameter(FILTER_QUERY_PARAM_NAME);
  const sortByQueryParam = getQueryParameter(SORT_QUERY_PARAM_NAME);

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
