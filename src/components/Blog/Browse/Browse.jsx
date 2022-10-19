import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import styles from './Browse.css';

export default function () {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('blogs-backend')
        .then((response) => response.json())
        .then((data) => setBlogs(data));
    };
    // expect data to be in shape: [{blog},{blog}]
    // fetchData();
  }, []);

  return (
    <div className={styles.Browse}>
      {blogs.map((blog) => (
        <BlogCard key={Math.random(20)} blog={blog} />
      ))}
    </div>
  );
}
