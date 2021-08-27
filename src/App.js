import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // React-Bootstrap Handle Submit form
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{padding: "10rem"}}>
          <p className="lead py-5 display-3">Hello World, ipman is back!</p>

          <Form
            name="contact-v1"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
            >

            <Form.Control type="hidden" name="form-name" value="contact-v1"/>

            <Form.Group className="mb-3" controlId="contact-v1.NameInput">
              <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3">
                <Form.Control
                  required
                  name="name"
                  type="text"
                  placeholder="Normal text" />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact-v1.EmailInput">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  required
                  name="email"
                  type="email"
                  placeholder="name@example.com" />
                <Form.Control.Feedback type="invalid">
                  Please enter valid email address like (name@example.com).
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact-v1.MessageInput">
              <FloatingLabel controlId="floatingTextarea" label="Message">
                <Form.Control
                  required
                  name="message"
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: '150px' }} />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit if you believe in ipman
            </Button>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
