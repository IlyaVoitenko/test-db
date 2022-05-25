import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isAuthManagerAction } from '../../../store/createActions';
import { Button, Modal, Form } from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Log in
      </Button>
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Login"
                  onChange={({ target }) => {
                    setLogin(target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={({ target }) => {
                    setPassword(target.value);
                  }}
                />
              </Form.Group>
              <Button
                show={show}
                variant="primary"
                // type="submit"
                onClick={() => {
                  if (login === 'admin' && password === 'admin') {
                    dispatch(isAuthManagerAction());
                    return handleClose();
                  }
                  alert("You aren't a manager");
                  handleClose();
                }}
              >
                Send
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Form>
    </>
  );
};
export default Login;
