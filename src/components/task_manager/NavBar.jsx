import CreateTask from "./CreateTask";
import SortTask from "./SortTask";
import FilterTask from "./FilterTask";

export default function NavBar() {
  return (
    <div className="bg-body-tertiary p-2 nav-bar-wrapper">
      <CreateTask />
      <div className="sort-filter-container">
        <SortTask />
        <FilterTask />
      </div>
    </div>
  );
}
