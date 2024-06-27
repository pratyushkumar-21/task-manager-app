import { Card, Stack } from "react-bootstrap";

import StatusTag from "./StatusTag";
import TaskCardActions from "./TaskCardActions";

export default function TaskCard(props) {
  const { title, description, status } = props;

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Stack direction="horizontal" gap={3}>
          <StatusTag status={status} />
          <TaskCardActions {...props} />
        </Stack>
      </Card.Body>
    </Card>
  );
}
