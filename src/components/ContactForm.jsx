import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FormField from "./FormInput";
export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "ABC",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "abc@def.net",
      errorMessage: "It should be a valid email address!",
      label: "Email Address",
      required: true,
    },
    {
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "This is an option",
      label: "Subject",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mb-3 mb-md-5">
        {inputs.map((input) => (
          <FormField
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mb-3 fs-5">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Hi I'd like to ask about..."
            required
          />
        </Form.Group>
        <button className=" btn btn-outline-dark px-5 my-3">Submit</button>
      </form>
    </>
  );
}
