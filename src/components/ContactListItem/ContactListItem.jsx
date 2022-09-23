import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => (
    <li className={css.contactListItem}>
        <p className={css.contact}>
            {' '}
            {name}: {number}
        </p>
        <button
            className={css.buttonDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
        >
            Delete
        </button>
    </li>
);

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}