import { useState } from 'react';
import { getDataClients } from '../../useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthManagerAction } from '../../../store/createActions';
import { getStateIsAuthManager } from '../selectors';
import { Button, Modal, Form } from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthManager = useSelector(getStateIsAuthManager);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        disabled={isAuthManager ? true : false}
      >
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
                  console.log('password', password, ' -- ', login);
                  if (login === 'admin' && password === 'admin') {
                    //dispatch(getDataClients());
                    dispatch(isAuthManagerAction(true));
                    // setLogin('');
                    // setPassword('');
                    return handleClose();
                  }
                  alert("You aren't a manager");
                  // setLogin('');
                  // setPassword('');
                  dispatch(isAuthManagerAction(false));
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
