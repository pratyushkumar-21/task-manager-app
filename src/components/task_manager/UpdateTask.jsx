import { useState, useContext } from "react";
import { Badge, Modal } from "react-bootstrap";
import { Pen } from "react-bootstrap-icons";
import { TaskManagerContext } from "./context";
import TaskForm from "./TaskForm";
import {
  setTasksToLocalStorage,
  getTasksFromLocalStorage,
  getTasks,
} from "./utils";

export default function UpdateTask(props) {
  const { id: taskId } = props;
  const [showModal, setShowModal] = useState(false);
  const { setTasks } = useContext(TaskManagerContext);
  const tasks = getTasksFromLocalStorage();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e, formData) => {
    e.preventDefault();

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...formData } : task
    );

    setTasksToLocalStorage(updatedTasks);
    setTasks(getTasks());
    handleClose();
  };

  return (
    <>
      <Badge
        bg="light"
        text="dark"
        onClick={() => setShowModal(true)}
        className="task-action"
      >
        <Pen color="blue" />
      </Badge>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-3 mx-3">
          <TaskForm
            onFormSubmit={handleFormSubmit}
            {...props}
            btnText={"Update Task"}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
