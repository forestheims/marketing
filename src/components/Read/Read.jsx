import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Read.css';

export default function Random() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    id: '1',
    title: 'Blog currently under development. Check back soon!',
    createdAt: '2/17/2023',
    tags: [''],
    image_url: '../images/loading/fox-gif.gif',
    content: '',
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('blogs-backend: get blog by id', blogId)
        .then((response) => response.json())
        .then((data) => setBlog(data));
    };
    // expect data to be in shape: {id, title, createdAt, tags, content, image_url}
    // fetchData();
  }, []);

  return (
    <div className={styles.Read}>
      <h2 className={styles.ReadHTwo}>{blog.title}</h2>
      <img src={blog.image_url} alt={blog.title} />
      <ul>
        {blog.tags.map((tag) => (
          <li key={Math.random(100)}>{tag}</li>
        ))}
      </ul>
      {/* markdown preview display here instead of paragraph */}
      <p className={styles.Paragraph}>{blog.content}</p>
    </div>
  );
}
