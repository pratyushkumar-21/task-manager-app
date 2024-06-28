import { useContext } from "react";
import { Button } from "react-bootstrap";
import CreateTask from "./CreateTask";
import SortTask from "./SortTask";
import FilterTask from "./FilterTask";
import { TaskManagerContext } from "./context";
import { getTasks, removeQueryParameter } from "./utils";
import { SORT_QUERY_PARAM_NAME, FILTER_QUERY_PARAM_NAME } from "./constant";

export default function NavBar() {
  const { setTasks } = useContext(TaskManagerContext);

  const handleClearSortFilter = () => {
    removeQueryParameter(SORT_QUERY_PARAM_NAME);
    removeQueryParameter(FILTER_QUERY_PARAM_NAME);
    setTasks(getTasks());
  };

  return (
    <div className="bg-body-tertiary p-2 nav-bar-wrapper">
      <div className="sort-filter-container">
        <SortTask />
        <FilterTask />
        <Button variant="outline-secondary" onClick={handleClearSortFilter}>
          Clear Filter and Sort
        </Button>
      </div>
      <CreateTask />
    </div>
  );
}
