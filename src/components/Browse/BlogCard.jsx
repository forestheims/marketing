import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.css';

export default function BlogCard({ blog }) {
  const { id, title, createdAt, tags, imageURL, content } = blog;
  const navigate = useNavigate();
  const splitContent = content.split('<br />');

  const scanForElements = (stringP) => {
    let splitP = stringP.split('<a>');
    if (splitP.length > 1) {
      let urlP = splitP[1].split('</a>')[0];
      return (
        <a key={urlP} className={styles.BlogCardLink} href={urlP}>
          {urlP}
        </a>
      );
    } else
      return (
        <p key={stringP} className={styles.BlogCardContent}>
          {stringP}
        </p>
      );
  };

  return (
    <div className={styles.BlogCard} onClick={() => navigate(`/blog/${id}`)}>
      <img className={styles.BlogCardImg} src={imageURL} alt={title} />
      {/* <div className={styles.BlogCardText}> */}
      <h2 className={styles.BlogCardHTwo}>{title}</h2>
      <div className={styles.BlogTagDate}>
        <span className={styles.BlogCardDate}>{createdAt}</span>
        <span className={styles.BlogCardTag}>{tags[0]}</span>
      </div>
      {splitContent.map((p) => scanForElements(p))}
      {/* </div> */}
    </div>
  );
}
