import { NavLink, Outlet } from 'react-router-dom';
import styles from './Blog.css';

export default function Blog() {
  return (
    <div className={styles.Blog}>
      <div>
        <NavLink to="">Browse</NavLink>
        <NavLink to="write">Write</NavLink>
        <NavLink to="f43gw4">Random</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
