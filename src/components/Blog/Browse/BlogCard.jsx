import styles from './BlogCard.css';

export default function BlogCard({ blog }) {
  const { id, title, createdAt, tags, image_url, content } = blog;

  return (
    <div className={styles.BlogCard}>
      <img className={styles.BlogCardImg} src={image_url} alt={title} />
      <div className={styles.BlogCardText}>
        <h2 className={styles.BlogCardHTwo}>{title}</h2>
        <div className={styles.BlogTagDate}>
          <span className={styles.BlogCardDate}>{createdAt}</span>
          <span className={styles.BlogCardTag}>{tags[0]}</span>
        </div>
        <p className={styles.BlogCardContent}>{content}</p>
      </div>
    </div>
  );
}
