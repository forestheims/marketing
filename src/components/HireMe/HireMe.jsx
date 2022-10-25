import React from 'react';
import styles from './HireMe.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function HireMe() {
  return (
    <div className={styles.HireMe}>
      <div className={styles.HireMeDiv}>
        <NavLink to="">Browse</NavLink>
        <NavLink to="login">Sign In</NavLink>
        <NavLink to="register">Create An Account</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
