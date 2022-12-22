import About from '../About/About';
import AboutPerson from '../AboutDev/AboutDev';
import Links from '../Links/Links';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <div>
        <AboutPerson />
        <About />
      </div>
      <Links />
    </div>
  );
}
