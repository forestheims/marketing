import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import styles from './Browse.css';

export default function () {
  const [blogs, setBlogs] = useState([
    {
      id: '1',
      title: 'Tech Talk',
      createdAt: '2/17/2023',
      tags: ['software engineering', 'computer science'],
      imageURL: 'https://randomfox.ca/images/76.jpg',
      content: 'Personal ponderings of the evolving digital human interfaces.',
    },
    {
      id: '5',
      title: 'Alopecia Areata',
      createdAt: '2/17/2023',
      tags: ['autoimmune disorders', 'adverse reactions to pharmaceuticals'],
      imageURL:
        'https://mlbn0rjvf5og.i.optimole.com/w:450/h:398/q:mauto/f:avif/https://hailstorm-development.com/wp-content/uploads/2021/03/Zoom-Meeting.jpg',
      content: "The reason you won't find any pictures of me on LinkedIn.",
    },
  ]);

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
      <h2 className={styles.BrowseHTwo}>Blogs</h2>
      <div className={styles.BlogsScroll}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
