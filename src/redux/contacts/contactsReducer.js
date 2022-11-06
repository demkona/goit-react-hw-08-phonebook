import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContactsSuccess,
  deleteContactsSuccess,
  filterContact,
  addContactSuccess,
} from './contactsAction';

const reducerItem = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const reducerFilter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
  });

export const reducerContacts = combineReducers({
  items: reducerItem,
  filter: reducerFilter,
});
