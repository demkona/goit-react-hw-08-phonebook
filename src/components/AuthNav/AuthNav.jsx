import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
const styles = {
  activeLink: {
    color: '#ffc107'
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={css.link}

        activeStyle={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={css.link}
        activeStyle={styles.link}
      >
        Log in
      </NavLink>
    </div>
  );
}
