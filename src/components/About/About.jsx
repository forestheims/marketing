import React from 'react';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Personal Background</h2>
        <p className={styles.Paragraph}>
          I have a diverse academic background in chemistry, philosophy, and
          art, and I value education highly. I am passionate about teaching and
          learning, and I am always exploring new topics. Some of my interests
          include bioinformatics, psychology, 3D engineering, audio engineering,
          audio visualization, game development, Linux, cybersecurity,
          computational chemistry/biology, genetic algorithms, drug discovery,
          organic chemistry, psychopharmacology, psychonautics, and open source
          software and education. I enjoy these topics because they allow me to
          explore new ideas and learn about the world around me.
        </p>
        <p className={styles.Paragraph}>
          In my free time, I enjoy hiking, juggling, rollerskating, and
          printmaking. I am also fond of essential oil and hydrosol
          distillation, a process that I find fascinating and rewarding. Through
          this process, I am able to create natural and fragrant products that
          promote well-being and health.
        </p>
      </article>
    </div>
  );
}
