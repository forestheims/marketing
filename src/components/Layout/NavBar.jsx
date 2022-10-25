import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';
import DivDots from './DivDots/DivDots';
import styles from './Layout.css';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (e) => {
    if (theme.darkMode) setTheme({ ...theme, darkMode: false });
    else setTheme({ ...theme, darkMode: true });
  };

  const handleClick = (e) => {
    if (theme.divDots) setTheme({ ...theme, divDots: false });
    else setTheme({ ...theme, divDots: true });
  };

  return (
    <header>
      <div className={styles.DivDotsCircle} onClick={(e) => handleClick(e)}>
        {theme.divDots && <DivDots />}
      </div>
      <NavLink to="">Home</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="work">Hire Me</NavLink>
      <div className={styles.Circle}>
        <img onClick={(e) => handleTheme(e)} src="/images/5558220.png"></img>
      </div>
    </header>
  );
}
