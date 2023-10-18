import { Form } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" type="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
    </Form>
    </>
  )
}

export default App
