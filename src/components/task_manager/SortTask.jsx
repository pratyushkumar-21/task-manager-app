import { useContext } from "react";
import { Form, Stack } from "react-bootstrap";
import { SORTING_OPTIONS, PRIORITY, SORT_QUERY_PARAM_NAME } from "./constant";
import { setQueryParameter, removeQueryParameter } from "./utils";
import { TaskManagerContext } from "./context";

export default function SortTask() {
  const { setTasks } = useContext(TaskManagerContext);

  const handleSort = (e) => {
    const value = e.target.value && parseInt(e.target.value);

    if (!value) {
      removeQueryParameter(SORT_QUERY_PARAM_NAME);
      return;
    }

    setQueryParameter(SORT_QUERY_PARAM_NAME, value);

    setTasks((prevTasks) => {
      const cloneTasks = [...prevTasks];
      const sortedTask = cloneTasks.sort((a, b) => {
        if (value === PRIORITY.HIGH) return a.priority - b.priority;
        else if (value === PRIORITY.LOW) return b.priority - a.priority;
      });

      return sortedTask;
    });
  };

  return (
    <Stack direction="horizontal" gap={2}>
      <div>Sort By</div>
      <div>
        <Form.Select onChange={handleSort}>
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
