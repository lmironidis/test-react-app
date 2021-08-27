import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{ padding: "10rem" }}>
          <p className="lead py-5 display-3">Hello World, ipman is back!</p>

          <Form
            name="contactv1"
            method="POST"
            data-netlify="true"
            onSubmit="submit">

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                type="textarea" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit if you believe in ipman
            </Button>

          </Form>



          <form
            name="contactv2"
            method="POST"
            data-netlify="true"
            onSubmit="submit">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
