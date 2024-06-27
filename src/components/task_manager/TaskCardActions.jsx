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
import { STATUS } from "./utils";

export default function TaskCardActions(props) {
  const { id: taskId, status } = props;
  const { setTasks } = useContext(TaskManagerContext);

  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleMarkAsDone = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.DONE } : task
      )
    );
  };

  const handleMarkAsInProgress = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.IN_PROGRESS } : task
      )
    );
  };

  const handleMarkAsPending = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: STATUS.PENDING } : task
      )
    );
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
