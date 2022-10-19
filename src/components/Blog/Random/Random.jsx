import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Random.css';

export default function Random() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    id: '',
    title: '',
    createdAt: '',
    tags: [],
    body: [],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('blogs-backend: get blog by id', blogId)
        .then((response) => response.json())
        .then((data) => setBlog(data));
    };
    // expect data to be in shape: {id, title, createdAt, tags, body}
    // fetchData();
  }, []);

  return (
    <div className={styles.Random}>
      <h1>{blog.title}</h1>
      <ul>
        {blog.tags.map((tag) => (
          <li key={Math.random(100)}></li>
        ))}
      </ul>
      <p>BlogId = {blogId}</p>
    </div>
  );
}
