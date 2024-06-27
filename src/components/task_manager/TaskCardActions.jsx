import { Stack, Badge, Tooltip } from "react-bootstrap";
import { Trash, Pen } from "react-bootstrap-icons";

export default function TaskCardActions() {
  return (
    <Stack direction="horizontal" gap={2} className="ms-auto">
      <Badge bg="light" text="dark">
        <Pen />
      </Badge>
      <Badge bg="light" text="dark">
        <Trash />
      </Badge>
    </Stack>
  );
}
