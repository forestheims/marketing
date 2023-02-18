import React from 'react';
import TechStack from '../TechStack/TechStack';
import styles from './AboutDev.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Tech Experience</h2>
        <TechStack />
        <p className={styles.Paragraph}>
          I am a detail-oriented software engineer with expertise in planning,
          building, and deploying full-stack applications using the PERN stack
          (PostgreSQL, Express, React, Node). I have a deep understanding of
          UX/UI design and enjoy the creative and psychological aspects of this
          field. I am also well-versed in systematic Test Driven Development
          (TDD) and have experience in writing, updating, and debugging RESTful
          APIs.
        </p>
        <p className={styles.Paragraph}>
          Recently, I have been exploring the exciting world of game
          development, where I have been learning Unity, C#, and Blender. I find
          game development to be a great source of inspiration, and I enjoy
          using my skills to create engaging and immersive experiences for
          users.
        </p>
        <br />
        <h2 className={styles.AboutHTwo}>Tech Stack</h2>
        <ul className={styles.List}>
          <li>Languages: HTML, CSS, JavaScript, PostgreSQL, TypeScript, C#</li>
          <li>Libraries: React.js, Node.js, Jest</li>
          <li>Frameworks: Express.js, vanilla JavaScript</li>
          <li>Tools: Git, Visual Studio Code, Slack, Discord</li>
          <li>SasS: Netlify, Heroku, Supabase Other</li>
          <li>Libraries: fetch, superagent, three.js, tone.js</li>
          <li>Game Development: Unity, Blender</li>
        </ul>
      </article>
    </div>
  );
}
