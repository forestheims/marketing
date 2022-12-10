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
    <header className={styles.Header}>
      <h1 className={styles.HOne}>Forest Heims</h1>

      <div className={styles.Links}>
        <NavLink className={styles.Link} to="">
          Home
        </NavLink>
        <NavLink className={styles.Link} to="projects">
          Projects
        </NavLink>
        <NavLink className={styles.Link} to="contact">
          Contact
        </NavLink>
        <div className={styles.DivDotsCircle} onClick={(e) => handleClick(e)}>
          {theme.divDots && <DivDots />}
        </div>
        {/* <div className={styles.Circle}>
          <img
            className={styles.CircleImg}
            onClick={(e) => handleTheme(e)}
            src="/images/5558220.png"
          ></img>
        </div> */}
      </div>
    </header>
  );
}
