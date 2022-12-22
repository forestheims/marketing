import { NavLink } from 'react-router-dom';
import styles from './Layout.css';

export default function NavBar() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Forest Heims</h1>

      <div className={styles.Links}>
        <NavLink className={styles.Link} to="">
          Home
        </NavLink>
        <NavLink className={styles.Link} to="projects">
          Projects
        </NavLink>
        <NavLink className={styles.Link} to="contact" text="Contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}
