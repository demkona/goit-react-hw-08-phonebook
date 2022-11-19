import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { Navbar } from 'react-bootstrap';


export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}

