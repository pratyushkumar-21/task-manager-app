import { Card, Stack } from "react-bootstrap";
import StatusTag from "./StatusTag";
import TaskCardActions from "./TaskCardActions";
import { PRIORITY } from "./utils";
import {
  ThermometerHalf,
  ThermometerHigh,
  ThermometerLow,
} from "react-bootstrap-icons";

export default function TaskCard(props) {
  const { title, description, status, priority } = props;

  const priorityIconMap = {
    [PRIORITY.LOW]: <ThermometerLow color="green" />,
    [PRIORITY.MEDIUM]: <ThermometerHalf color="blue" />,
    [PRIORITY.HIGH]: <ThermometerHigh color="red" />,
  };

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title className="text-secondary">
          {title} ({priorityIconMap[priority]})
        </Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Stack direction="horizontal" gap={3}>
          <StatusTag status={status} />
          <TaskCardActions {...props} />
        </Stack>
      </Card.Body>
    </Card>
  );
}
