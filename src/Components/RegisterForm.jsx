import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
  return (
    <Form className="container-sm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Button variant="primary" type="submit">
        Already have a account?
      </Button>
    </Form>
  );
}

export default RegisterForm;
