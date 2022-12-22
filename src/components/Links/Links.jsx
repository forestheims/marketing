import { useEffect, useState } from 'react';
import Bookmark from './Bookmark';
import styles from './Links.css';
export default function Links() {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('');
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
    };
    fetchData();
  }, [filter]);

  return (
    <div className={styles.Links}>
      <h2 className={styles.LinksHTwo}>Bookmarks</h2>
      {links.map((link) => {
        return <Bookmark link={link} key={link.id} />;
      })}
    </div>
  );
}
