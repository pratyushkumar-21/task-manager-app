import { useContext } from "react";
import { Stack, Badge } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import UpdateTask from "./UpdateTask";
import { TaskManagerContext } from "./context";

export default function TaskCardActions(props) {
  const { id: taskId } = props;
  const { setTasks } = useContext(TaskManagerContext);

  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <Stack direction="horizontal" gap={2} className="ms-auto">
      <UpdateTask {...props} />
      <Badge
        bg="light"
        text="dark"
        className="task-action"
        onClick={handleDelete}
      >
        <Trash />
      </Badge>
    </Stack>
  );
}
