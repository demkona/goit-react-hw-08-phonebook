import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import css from './pages.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <Form.Group className="mb-3">
          <Form.Label className={css.label}>
            Name
            <Form.Control
              placeholder="Enter your name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button className={css.button} type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
