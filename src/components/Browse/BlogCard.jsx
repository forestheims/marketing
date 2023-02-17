import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.css';

export default function BlogCard({ blog }) {
  const { id, title, createdAt, tags, imageURL, content } = blog;
  const navigate = useNavigate();

  return (
    <div className={styles.BlogCard} onClick={() => navigate(`/blog/${id}`)}>
      <img className={styles.BlogCardImg} src={imageURL} alt={title} />
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
