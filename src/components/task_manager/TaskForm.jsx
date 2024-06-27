import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

export default function TaskForm(props) {
  const { title = "", description = "", onFormSubmit } = props;

  const [formData, setFormData] = useState({
    title,
    description,
  });

  const handleInputChange = (e) => {
    const filedName = e.target.name;
    const value = e.target.value;
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

      <Stack>
        <Button variant="outline-primary" type="submit">
          Create Task
        </Button>
      </Stack>
    </Form>
  );
}
