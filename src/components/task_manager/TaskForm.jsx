import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { PRIORITY, STATUS, STATUS_DISPLAY_MAP } from "./utils";

export default function TaskForm(props) {
  const {
    title = "",
    description = "",
    priority = 2,
    status = STATUS.PENDING,
    onFormSubmit,
    btnText = "Create Task",
  } = props;

  const [formData, setFormData] = useState({
    title,
    description,
    priority,
    status,
  });

  const handleInputChange = (e) => {
    const filedName = e.target.name;
    let value = e.target.value;

    if (filedName === "priority") value = parseInt(value);
    setFormData((prevData) => ({ ...prevData, [filedName]: value }));
  };

  return (
    <Form onSubmit={(e) => onFormSubmit(e, formData)}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          required
          onChange={handleInputChange}
          value={formData.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="description"
          onChange={handleInputChange}
          value={formData.description}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="priority">Select Priority</Form.Label>
        <Form.Select
          id="priority"
          value={formData.priority}
          name="priority"
          onChange={handleInputChange}
        >
          {Object.keys(PRIORITY).map((key) => (
            <option value={PRIORITY[key]} key={key}>
              {key}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="status">Select Status</Form.Label>
        <Form.Select
          id="status"
          value={formData.status}
          name="status"
          onChange={handleInputChange}
        >
          {Object.keys(STATUS_DISPLAY_MAP).map((key) => (
            <option value={key} key={key}>
              {STATUS_DISPLAY_MAP[key]}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Stack className="mt-5">
        <Button variant="outline-primary" type="submit">
          {btnText}
        </Button>
      </Stack>
    </Form>
  );
}
