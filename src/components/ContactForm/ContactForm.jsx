import { useState } from 'react';
import { addContact } from '../../redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { Button, Form } from 'react-bootstrap';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;

      case 'number':
        setNumber(value);
        return;

      default:
        return;
    }
  };

  const findByName = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (findByName(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      Notiflix.Notify.success(`added contact ${name} : ${number}`)
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit} className={s.form}>
      <Form.Group className="mb-2">
        <Form.Label>
          Name
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            className={s.own}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>
          Number
          <Form.Control
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            className={s.own}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
