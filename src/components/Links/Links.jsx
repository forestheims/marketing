import { useEffect, useState } from 'react';
import Bookmark from './Bookmark';
import styles from './Links.css';
export default function Links() {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [tags, setTags] = useState(['All']);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.API_URL + '/api/v1/links', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'cors',
      });
      const data = await res.json();
      setLinks(data);
      const tagArr = ['All'];
      data.forEach((link) => {
        link.tags.forEach((tag) => {
          if (!tagArr.includes(tag)) {
            tagArr.push(tag);
          }
        });
      });
      setTags(tagArr);
    };
    fetchData();
  }, [filter]);

  return (
    <div className={styles.Links}>
      <h2 className={styles.LinksHTwo}>Bookmarks</h2>
      <label htmlFor="filter" className={styles.FilterLabel}>
        Filter:
        <select
          name="filter"
          className={styles.FilterInput}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {tags.map((tag) => {
            return (
              <option value={tag} key={tag}>
                {tag}
              </option>
            );
          })}
        </select>
      </label>
      {links.map((link) => {
        return (
          <Bookmark
            link={link}
            key={link.id}
            filter={filter}
            setFilter={setFilter}
          />
        );
      })}
    </div>
  );
}
