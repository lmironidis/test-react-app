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
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit="submit">

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                type="textarea"/>
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
