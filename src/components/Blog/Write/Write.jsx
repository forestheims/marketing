import styles from './Write.css';

export default function Write() {
  return (
    <form className={styles.Write}>
      <label htmlFor="title">
        Title
        <input type="text" />
      </label>
      <label htmlFor="content">
        <input type="textarea" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
