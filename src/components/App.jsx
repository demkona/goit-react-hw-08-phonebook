import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section'
import { Form } from './From/Form'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'
import './App.module.css'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }


  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;
    const isAudit = contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLowerCase())

    if (isAudit) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.id !== contactId
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  sortContactList = () => {
    return this.getVisibleContacts().sort(
      (firstContactName, secondContactName) =>
        firstContactName.name.localeCompare(secondContactName.name)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook" />
        <Form onSubmit={this.addContact} />
        <Section title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onChange={this.changeFilter}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
