import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { Navbar } from 'react-bootstrap';
import s from './Navigation.module.css'

const styles = {
  activeLink: {
    color: '#ffc107',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <NavLink to="/" exact className={s.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeStyle={styles.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
