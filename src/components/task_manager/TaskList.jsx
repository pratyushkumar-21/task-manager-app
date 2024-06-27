import { useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { TaskManagerContext } from "./context";

export default function TaskList() {
  const { tasks } = useContext(TaskManagerContext);

  if (tasks.length === 0) {
    return (
      <Alert variant="light" className="text-center">
        There is no task, Please create!
      </Alert>
    );
  }

  return (
    <Container fluid>
      <Row>
        {tasks.map((task) => (
          <Col className="mt-3" key={task.id}>
            <TaskCard {...task} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
