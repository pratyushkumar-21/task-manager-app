import Badge from "react-bootstrap/Badge";
import { STATUS, STATUS_DISPLAY_MAP } from "../task_manager/utils";

export default function StatusTag(props) {
  const { status } = props;

  const colorMap = {
    [STATUS.PENDING]: "primary",
    [STATUS.IN_PROGRESS]: "warning",
    [STATUS.DONE]: "success",
  };

  return <Badge bg={colorMap[status]}>{STATUS_DISPLAY_MAP[status]}</Badge>;
}
