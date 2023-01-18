import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Layout.css';

export default function NavBar() {
  const location = useLocation();
  const [title, setTitle] = useState('Blog');

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Blog');
    } else {
      const temp = location.pathname.replace('/', '');
      setTitle(temp.charAt(0).toUpperCase() + temp.slice(1));
    }
  }, [location.pathname]);

  console.log('location', location.pathname.replace('/', '').ca);
  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Forest (Fora) Heims | {title}</h1>

      <div className={styles.Links}>
        <NavLink className={styles.Link} to="">
          Home
        </NavLink>
        <NavLink className={styles.Link} to="about">
          About
        </NavLink>
        <NavLink className={styles.Link} to="projects">
          Projects
        </NavLink>
        <NavLink className={styles.Link} to="contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
