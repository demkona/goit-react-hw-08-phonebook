import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  addContactSuccess,
  addContactRequest,
  addContactError,
} from './contactsAction';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error)));
};
