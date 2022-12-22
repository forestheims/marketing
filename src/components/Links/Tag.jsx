import styles from './Tag.css';

export default function Tag({ tag }) {
  return (
    <div className={styles.Tag}>
      <h3>{tag}</h3>
    </div>
  );
}
