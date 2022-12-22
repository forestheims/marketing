import React from 'react';
import styles from './AboutDev.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Web Developer</h2>
        <p className={styles.Paragraph}>
          I am looking for a position as a Full Stack Software Engineer at a
          company with ethical integrity. I am a curious person and enjoy
          developing software iteratively. Experimentation and discovery make me
          light up with ideas, and I function best when given the opportunity to
          use analytical and critical thinking to solve problems.
        </p>
        <p className={styles.Paragraph}>
          My experience is in collaboratively planning, designing, and building
          web apps as sprint projects while using agile methodologies. I love
          collaboratively working on software with people. My personable nature
          and ability to listen deeply are skills that I always bring to any
          team.
        </p>
        <p className={styles.Paragraph}></p>
      </article>
    </div>
  );
}
