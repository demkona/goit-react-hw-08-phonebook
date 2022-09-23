
import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
            <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};