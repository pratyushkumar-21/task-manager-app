import { useState, useContext } from "react";
import { Button, Form, Stack, Modal } from "react-bootstrap";
import { TaskManagerContext } from "./context";
import TaskForm from "./TaskForm";
import { STATUS } from "./utils";

export default function CreateTask(props) {
  const [showModal, setShowModal] = useState(false);
  const { setTasks } = useContext(TaskManagerContext);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e, formData) => {
    e.preventDefault();

    const newTask = {
      ...formData,
      status: STATUS.PENDING,
      id: Date.now(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
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