import React from 'react';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>About me, as a Person</h2>
        <p className={styles.Paragraph}>
          My mind is interested in understanding how things work. My heart is
          interested in connecting with people. My soul is interested in
          creating and finding peace. From that space is where I work each day.
        </p>
        <p className={styles.Paragraph}>
          I come from a background in chemistry, philosophy, and art. Education
          will always be a value I hold, and I enjoy teaching and continuously
          learning. I find software engineering to be a fun space to combine
          creativity, logic, and problem solving skills. What I have found most
          enjoyable is working collaboratively with a team of people on sprint
          projects.
        </p>
      </article>
    </div>
  );
}
