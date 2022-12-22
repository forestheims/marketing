import { useEffect, useState } from 'react';
import getLinks from '../../services/getLinks.js';
import Bookmark from './Bookmark';
import styles from './Links.css';

export default function Links() {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [tags, setTags] = useState(['All']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stuff = await getLinks();
        setLinks(stuff);
      } catch (error) {
        console.log(error);
        setLinks([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const tagArr = ['All'];
    links.forEach((link) => {
      link.tags.forEach((tag) => {
        if (!tagArr.includes(tag.toLowerCase())) {
          tagArr.push(tag.toLowerCase());
        }
      });
    });
    setTags(tagArr);
  }, [filter, links]);

  return (
    <div className={styles.Links}>
      <h2 className={styles.LinksHTwo}>My Bookmarks</h2>
      <label htmlFor="filter" className={styles.FilterLabel}>
        Filter By Tag:
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
      <div className={styles.ScrollContainer}>
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
    </div>
  );
}
