import React from 'react';
import { deleteContacts } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import scc from './ContactListItem.module.css';
import { Button } from 'react-bootstrap';
import Notiflix from 'notiflix';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContacts(id),
    Notiflix.Notify.failure(`contact ${name} deleted`));

  return (
    <li className={scc.contactListItem}>
      <p className={scc.contact}>
        {' '}
        {name}: {number}
      </p>
      <Button
        className={scc.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
    </li>
  );

}

export default ContactListItem;
