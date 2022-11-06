import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Button, Form } from 'react-bootstrap';
import styles from './pages.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={styles.label}>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button type="submit">
          Enter
        </Button>{' '}
      </Form>
    </div>
  );
}
