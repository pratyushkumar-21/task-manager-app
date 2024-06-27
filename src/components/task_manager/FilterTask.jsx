import { useContext, useState } from "react";
import { Form, Stack } from "react-bootstrap";
import {
  STATUS_DISPLAY_MAP,
  STATUS,
  FILTER_QUERY_PARAM_NAME,
} from "./constant";
import {
  setQueryParameter,
  removeQueryParameter,
  filterTasksByStatus,
  getQueryParameter,
  getTasksFromLocalStorage,
  getTasks,
} from "./utils";
import { TaskManagerContext } from "./context";

export default function FilterTask() {
  const [filterValue, setFilterValue] = useState(
    getQueryParameter(FILTER_QUERY_PARAM_NAME) ?? ""
  );
  const { setTasks } = useContext(TaskManagerContext);

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);

    if (!value) {
      removeQueryParameter(FILTER_QUERY_PARAM_NAME);
      setTasks(getTasks());
      return;
    }

    setQueryParameter(FILTER_QUERY_PARAM_NAME, value);
    setTasks(filterTasksByStatus(getTasksFromLocalStorage(), value));
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <div>Filter By Status</div>
      <div>
        <Form.Select onChange={handleFilter} value={filterValue}>
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
