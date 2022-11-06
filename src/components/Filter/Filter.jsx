import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/contactsAction';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    return dispatch(filterContact(e.target.value));
  };

  return (
    <Form autoComplete="off" className={s.form}>
      <Form.Group className="mb-3">
        <Form.Label className={s.label}>
          Find contacts by name
          <Form.Control
            placeholder="Enter the name you want to find"
            type="text"
            name="filter"
            className={s.filter}
            value={filter}
            onChange={changeFilter}
          />
        </Form.Label>
      </Form.Group>
    </Form>
  );
};

export default Filter;
