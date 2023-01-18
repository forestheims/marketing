import React from 'react';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Human stuff</h2>
        <p className={styles.Paragraph}>
          I come from a background in chemistry, philosophy, and art. Education
          will always be a value I hold, and I enjoy teaching and continuously
          learning. I find software engineering to be a fun space to combine
          creativity, logic, and problem solving skills. Some of my hobbies are
          juggling, rollerskating, and printmaking.
        </p>
      </article>
    </div>
  );
}
