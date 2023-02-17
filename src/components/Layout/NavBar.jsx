import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Layout.css';

export default function NavBar() {
  const location = useLocation();
  const [title, setTitle] = useState('Blog');

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Forest Heims';
      setTitle('');
    } else {
      const temp = location.pathname.split('/')[1];
      const newTitle = ' | ' + temp.charAt(0).toUpperCase() + temp.slice(1);
      document.title = 'Forest Heims' + newTitle;
      setTitle(newTitle);
    }
  }, [location.pathname]);

  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Forest Heims{title}</h1>

      <div className={styles.Links}>
        <NavLink className={styles.Link} to="">
          Home
        </NavLink>
        <NavLink className={styles.Link} to="blog">
          Blog
        </NavLink>
        {/* <NavLink className={styles.Link} to="games">
          Games
        </NavLink> */}
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
