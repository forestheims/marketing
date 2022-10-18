import { useParams } from 'react-router-dom';
import styles from './Random.css';

export default function Random() {
  const { blog } = useParams();
  return (
    <div className={styles.Random}>
      <p>Random {blog}</p>
    </div>
  );
}
