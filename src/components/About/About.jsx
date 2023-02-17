import React from 'react';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Personal Background</h2>
        <p className={styles.Paragraph}>
          I come from an academic background of chemistry, philosophy, and art.
          Education will always be a value I hold, and I enjoy teaching and
          continuously learning.
        </p>
        <p className={styles.Paragraph}>
          I am particularly interested in bioinformatics, psychology, 3D
          engineering, audio engineering, audio visualization, game development,
          Linux, cybersecurity, computational chemistry/biology, genetic
          algorithms, drug discovery, organic chemistry, psychopharmacology,
          psychonautics, and open source software and education.
        </p>
        <p className={styles.Paragraph}>
          My hobbies include hiking, juggling, rollerskating, and printmaking.
          Essential Oil and Hydrosol distillation is a process I am also fond
          of.
        </p>
      </article>
    </div>
  );
}
