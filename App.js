import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'; 
function App() {
  return (
    <div className="App">
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="tapez votre email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>HTML</option>
      <option>CSS</option>
      <option>JS</option>
      <option>REACT JS</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>Html</option>
      <option>CSS</option>
      <option>ES5</option>
      <option>ES6</option>
      <option>React Js</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
    </div>
  );
}

export default App;
