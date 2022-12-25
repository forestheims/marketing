import styles from './ProjectsSolo.css';

export default function ProjectSoloCard() {
  return (
    <div className={styles.Card}>
      <h3 className={styles.CardTitle}>Title</h3>
      <span className={styles.CardDescription}>description</span>
      <img
        className={styles.CardImg}
        src="images\5558220.png"
        alt="night time"
      />
    </div>
  );
}
