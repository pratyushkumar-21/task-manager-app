import { useContext } from "react";
import { Form, Stack } from "react-bootstrap";
import {
  STATUS_DISPLAY_MAP,
  STATUS,
  FILTER_QUERY_PARAM_NAME,
} from "./constant";
import { setQueryParameter, removeQueryParameter } from "./utils";
import { TaskManagerContext } from "./context";

export default function FilterTask() {
  const { setTasks } = useContext(TaskManagerContext);

  const handleFilter = (e) => {
    const value = e.target.value;

    if (!value) {
      removeQueryParameter(FILTER_QUERY_PARAM_NAME);
      return;
    }

    setQueryParameter(FILTER_QUERY_PARAM_NAME, value);

    setTasks((prevTasks) => {
      const cloneTasks = [...prevTasks];
      const filteredTask = cloneTasks.filter((task) => task.status === value);
      return filteredTask;
    });
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <div>Filter By Status</div>
      <div>
        <Form.Select onChange={handleFilter}>
          <option value="">----------</option>
          {Object.keys(STATUS).map((key) => (
            <option key={key} value={STATUS[key]}>
              {STATUS_DISPLAY_MAP[key]}
            </option>
          ))}
        </Form.Select>
      </div>
    </Stack>
  );
}
