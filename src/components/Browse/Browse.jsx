import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import styles from './Browse.css';

export default function () {
  const [blogs, setBlogs] = useState([
    {
      id: '5',
      title: 'I plan on setting up a TIL "journal" soon',
      createdAt: '2/27/2023',
      tags: ['Web Learning Log'],
      imageURL: 'https://randomfox.ca/images/48.jpg',
      content: 'Write it down, move forward, recount',
    },
    {
      id: '8',
      title: 'The Library of Babel',
      createdAt: '2/18/2023',
      tags: ['philosophy of language', 'this one is for you John Powell'],
      imageURL:
        'https://images.squarespace-cdn.com/content/6292e4c9c6759c50bca53dbd/1657981182457-V38MIWM1KC6YC1L2V1S2/20220716+Borges+Library+blog.jpg?format=1500w&content-type=image%2Fjpeg',
      content:
        '<a>https://maskofreason.files.wordpress.com/2011/02/the-library-of-babel-by-jorge-luis-borges.pdf</a>',
    },
    {
      id: '1',
      title: 'Tech Talk',
      createdAt: '2/17/2023',
      tags: ['software engineering', 'computer science'],
      imageURL: 'https://randomfox.ca/images/76.jpg',
      content: 'Personal ponderings of the evolving digital human interfaces.',
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
