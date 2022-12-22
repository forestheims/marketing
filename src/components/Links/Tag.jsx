import styles from './Tag.css';

export default function Tag({ tag, setFilter }) {
  return (
    <div className={styles.Tag} onClick={(e) => setFilter(tag.toLowerCase())}>
      <h3>{tag}</h3>
    </div>
  );
}
