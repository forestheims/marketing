import styles from './AnimatedBorder.css';

export default function AnimatedBorder({ children }) {
  return (
    <div className={styles.AnimatedBorder}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
}
