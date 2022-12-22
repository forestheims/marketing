import isValidUrl from '../../utils/isValidUrl.js';
import styles from './Bookmark.css';
import Tag from './Tag';
export default function Bookmark({ link, filter, setFilter }) {
  const isFiltered = filter === 'All' || link.tags.includes(filter);

  return (
    isFiltered &&
    isValidUrl(link.link_url) && (
      <div className={styles.Bookmark}>
        <a className={styles.BookmarkLink} href={link.link_url}>
          {link.title}{' '}
        </a>

        <div className={styles.Tags}>
          {link.tags.map((tag) => (
            <Tag key={tag + link.id} tag={tag} setFilter={setFilter} />
          ))}
        </div>
      </div>
    )
  );
}
