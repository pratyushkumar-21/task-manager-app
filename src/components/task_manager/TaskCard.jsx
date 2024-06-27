import { Card, Stack } from "react-bootstrap";
import StatusTag from "./StatusTag";
import QuickActions from "./QuickActions";
import { PRIORITY } from "./constant";
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
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>
          {title} ({priorityIconMap[priority]})
        </Card.Title>
        <hr />
        <Card.Text className="text-secondary">{description}</Card.Text>
        {description && <hr />}
        <Stack direction="horizontal" gap={3}>
          <StatusTag status={status} />
          <QuickActions {...props} />
        </Stack>
      </Card.Body>
    </Card>
  );
}
