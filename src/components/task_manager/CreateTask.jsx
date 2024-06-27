import { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { TaskManagerContext } from "./context";
import TaskForm from "./TaskForm";

export default function CreateTask() {
  const [showModal, setShowModal] = useState(false);
  const { setTasks } = useContext(TaskManagerContext);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e, formData) => {
    e.preventDefault();

    const newTask = {
      ...formData,
      id: Date.now(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={() => setShowModal(true)}>
        Create New Task
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-3 mx-3">
          <TaskForm onFormSubmit={handleFormSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
}
