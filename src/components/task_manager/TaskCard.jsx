import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import StatusTag from "../common/StatusTag";
import TaskCardActions from "./TaskCardActions";

export default function TaskCard(props) {
  const { title, description, status } = props;

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Stack direction="horizontal" gap={3}>
          <StatusTag status={status} />
          <TaskCardActions />
        </Stack>
      </Card.Body>
    </Card>
  );
}
