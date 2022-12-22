import styles from './Bookmark.css';
import Tag from './Tag';
export default function Bookmark({ link }) {
  return (
    <div className={styles.Bookmark}>
      <a className={styles.BookmarkLink} href={link.link_url} target="_blank">
        {link.title}{' '}
      </a>
      <div className={styles.Tags}>
        {link.tags.map((tag) => (
          <Tag key={tag + link.title} tag={tag} />
        ))}
      </div>
    </div>
  );
}
