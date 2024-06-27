import { Container, Row, Col } from "react-bootstrap";
import TaskCard from "./TaskCard";

export default function TaskList(props) {
  const { tasks } = props;
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
