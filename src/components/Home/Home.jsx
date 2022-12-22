import About from '../About/About';
import Links from '../Links/Links';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <About />
      <Links />
    </div>
  );
}
