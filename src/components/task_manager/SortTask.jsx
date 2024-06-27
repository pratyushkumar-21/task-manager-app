import { useContext, useState } from "react";
import { Form, Stack } from "react-bootstrap";
import { SORTING_OPTIONS, PRIORITY, SORT_QUERY_PARAM_NAME } from "./constant";
import {
  setQueryParameter,
  removeQueryParameter,
  getQueryParameter,
  sortTasksByPriority,
} from "./utils";
import { TaskManagerContext } from "./context";

export default function SortTask() {
  const [sortValue, setSortValue] = useState(
    getQueryParameter(SORT_QUERY_PARAM_NAME) ?? ""
  );
  const { setTasks } = useContext(TaskManagerContext);

  const handleSort = (e) => {
    const value = e.target.value;
    setSortValue(value);

    if (!value) {
      removeQueryParameter(SORT_QUERY_PARAM_NAME);
      return;
    }

    setQueryParameter(SORT_QUERY_PARAM_NAME, value);

    setTasks((prevTasks) => {
      const cloneTasks = [...prevTasks];
      return sortTasksByPriority(cloneTasks, value);
    });
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <div>Sort By</div>
      <div>
        <Form.Select onChange={handleSort} value={sortValue}>
          <option value="">----------</option>
          {SORTING_OPTIONS.map((sortOption) => (
            <option key={sortOption.value} value={sortOption.value}>
              {sortOption.label}
            </option>
          ))}
        </Form.Select>
      </div>
    </Stack>
  );
}
