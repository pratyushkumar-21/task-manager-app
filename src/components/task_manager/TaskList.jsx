import { useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { TaskManagerContext } from "./context";

export default function TaskList() {
  const { tasks } = useContext(TaskManagerContext);

  if (tasks.length === 0) {
    return (
      <Alert variant="light" className="text-center">
        NO TASK.
      </Alert>
    );
  }

  return (
    <Row>
      {tasks.map((task) => (
        <Col className="mt-3 task-col-container" key={task.id}>
          <TaskCard {...task} />
        </Col>
      ))}
    </Row>
  );
}
