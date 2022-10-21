import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import styles from './Layout.css';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleClick = (e) => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header>
      <NavLink to="">Home</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <div className={styles.circle}>
        <img onClick={(e) => handleClick(e)} src="/images/5558220.png"></img>
      </div>
    </header>
  );
}
