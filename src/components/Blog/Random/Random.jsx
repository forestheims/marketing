import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Random.css';

export default function Random() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    id: '',
    title: 'wrods',
    createdAt: '',
    tags: ['this', 'that', 'the'],
    content:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \n\n "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('blogs-backend: get blog by id', blogId)
        .then((response) => response.json())
        .then((data) => setBlog(data));
    };
    // expect data to be in shape: {id, title, createdAt, tags, content}
    // fetchData();
  }, []);

  return (
    <div className={styles.Random}>
      <h1>{blog.title}</h1>
      <ul>
        {blog.tags.map((tag) => (
          <li key={Math.random(100)}>{tag}</li>
        ))}
      </ul>
      <p>{blog.content}</p>
      {/* {content.split('\n\n').map((paragraph) => {
        return <p>{paragraph}</p>
      })} */}
    </div>
  );
}
