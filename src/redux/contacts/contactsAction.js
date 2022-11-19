import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('/contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('/contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('/contacts/fetchContactsError');

export const addContactRequest = createAction('/contacts/addContactRequest');
export const addContactSuccess = createAction('/contacts/addContactSuccess');
export const addContactError = createAction('/contacts/addContactError');

export const deleteContactsRequest = createAction('/contacts/deleteContactsRequest');
export const deleteContactsSuccess = createAction('/contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('/contacts/deleteContactsError');

export const filterContact = createAction('filter/contact');
