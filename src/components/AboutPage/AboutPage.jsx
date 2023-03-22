import About from '../About/About';
import AboutPerson from '../AboutDev/AboutDev';
import Links from '../Links/Links';
import styles from './AboutPage.css';

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <AboutPerson />
      <About />
      <Links />
    </div>
  );
}
