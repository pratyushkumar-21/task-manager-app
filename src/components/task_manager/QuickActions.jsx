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
import { setTasksToLocalStorage } from "./utils";

export default function QuickActions(props) {
  const { id: taskId, status } = props;
  const { setTasks } = useContext(TaskManagerContext);

  const handleDelete = () => {
    setTasks((prevTasks) => {
      const newData = prevTasks.filter((task) => task.id !== taskId);
      setTasksToLocalStorage(newData);
      return newData;
    });
  };

  const handleMarkAsDone = () => {
    setTasks((prevTasks) => {
      const newData = prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.DONE } : task
      );
      setTasksToLocalStorage(newData);

      return newData;
    });
  };

  const handleMarkAsInProgress = () => {
    setTasks((prevTasks) => {
      const newData = prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.IN_PROGRESS } : task
      );
      setTasksToLocalStorage(newData);

      return newData;
    });
  };

  const handleMarkAsPending = () => {
    setTasks((prevTasks) => {
      const newData = prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.PENDING } : task
      );
      setTasksToLocalStorage(newData);

      return newData;
    });
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
