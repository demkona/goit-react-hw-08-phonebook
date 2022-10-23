import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section'
import { Form } from './From/Form'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'
import './App.module.css'

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const findName = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const addContact = ({ name, number }) => {
    if (findName(name)) {
      alert(`a contact with that ${name} already exists`);
      return;
    }
    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact =>
      contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <Section title="Phonebook" />
      <Form onSubmit={addContact} contacts={contacts} />
      <Section title="Contacts" />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onChange={changeFilter}
        onDeleteContact={deleteContact}
      />
    </>
  )
}