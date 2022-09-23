import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => {
    return (
        <label>
            find contact by name
            <input
                className={css.filter}
                type="text"
                name="filter"
                title="Search field"
                required
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}