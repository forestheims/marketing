import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Web Developer</h2>
        <p className={styles.Paragraph}>
          My mind is interested in understanding how things work. My heart is
          interested in connecting with people. My soul is interested in
          creating and finding peace. From that space is where I work each day.
        </p>
        <p className={styles.Paragraph}>
          I come from a background in chemistry, philosophy, and art. Education
          will always be a value I hold, and I enjoy teaching and continuous
          learning. I find software engineering to be a beautiful place to
          combine creativity and logic.
        </p>
        <p className={styles.Paragraph}>
          Currently I am looking for work as a Web Developer. I would love to
          work for a computational chemistry software company someday, but for
          now I am just trying to get my foot in the door to this industry.
          Check out the{' '}
          <NavLink className={styles.AboutLink} to="projects">
            projects
          </NavLink>{' '}
          link to see the web apps I have worked on. Or check out the{' '}
          <NavLink className={styles.AboutLink} to="contact">
            contact
          </NavLink>{' '}
          link for links to my resume, email, GitHub, and LinkedIn.
        </p>
      </article>
    </div>
  );
}
