import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { TaskManagerContext } from "./context";

export default function TaskList() {
  const { tasks } = useContext(TaskManagerContext);

  if (tasks.length === 0) {
    return <div>There is no task Please create!</div>;
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
