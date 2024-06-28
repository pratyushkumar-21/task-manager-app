import { useContext } from "react";
import { Stack, Badge } from "react-bootstrap";
import {
  Trash,
  CheckCircleFill,
  ThreeDots,
  DashCircleDotted,
} from "react-bootstrap-icons";
import UpdateTask from "./UpdateTask";
import { TaskManagerContext } from "./context";
import { STATUS } from "./constant";
import {
  setTasksToLocalStorage,
  getTasksFromLocalStorage,
  getTasks,
} from "./utils";

export default function QuickActions(props) {
  const { id: taskId, status } = props;
  const { setTasks } = useContext(TaskManagerContext);
  const tasks = getTasksFromLocalStorage();

  const saveTaskAction = (updatedTasks) => {
    setTasksToLocalStorage(updatedTasks);
    setTasks(getTasks());
  };

  const handleDelete = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTaskAction(updatedTasks);
  };

  const handleMarkAsDone = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: STATUS.DONE } : task
    );
    saveTaskAction(updatedTasks);
  };

  const handleMarkAsInProgress = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: STATUS.IN_PROGRESS } : task
    );
    saveTaskAction(updatedTasks);
  };

  const handleMarkAsPending = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: STATUS.PENDING } : task
    );
    saveTaskAction(updatedTasks);
  };

  return (
    <Stack direction="horizontal" gap={2} className="ms-auto">
      {status !== STATUS.PENDING && (
        <Badge
          bg="light"
          text="dark"
          className="task-action"
          onClick={handleMarkAsPending}
        >
          <ThreeDots color="blue" />
        </Badge>
      )}

      {status !== STATUS.IN_PROGRESS && (
        <Badge
          bg="light"
          text="dark"
          className="task-action"
          onClick={handleMarkAsInProgress}
        >
          <DashCircleDotted color="brown" />
        </Badge>
      )}

      {status !== STATUS.DONE && (
        <Badge
          bg="light"
          text="dark"
          className="task-action"
          onClick={handleMarkAsDone}
        >
          <CheckCircleFill color="green" />
        </Badge>
      )}

      <UpdateTask {...props} />
      <Badge
        bg="light"
        text="dark"
        className="task-action"
        onClick={handleDelete}
      >
        <Trash color="red" />
      </Badge>
    </Stack>
  );
}
