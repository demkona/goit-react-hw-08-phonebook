import { useState } from 'react';
import { Formik, Field } from 'formik';
import { FormBox, FormLabel, FormInput, FormButton, } from './ContactForm.styled';
import { useGetContactsQuery, useAddContactMutation } from '../../service/api';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    data.some(contact => contact.name === name)
      ? Notiflix.Notify.warning(`${name} is already in contacts`)
      : addContact({ name: name, phone: number })
      && Notiflix.Notify.success(`added contact ${name}`)

    setName('');
    setNumber('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  return (
    <Formik>
      <FormBox onSubmit={handleSubmit}>
        <FormLabel>Name</FormLabel>
        <Field
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          as={FormInput}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
        <FormLabel>Number</FormLabel>
        <Field
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          as={FormInput}
          onChange={handleChange}
          required
          placeholder="Enter number"
        />
        <FormButton type="submit">Add contact</FormButton>
      </FormBox>
    </Formik>
  );
};

export default ContactForm;