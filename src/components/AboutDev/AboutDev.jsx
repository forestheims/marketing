import React from 'react';
import { NavLink } from 'react-router-dom';
import TechStack from '../TechStack/TechStack';
import styles from './AboutDev.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Tech Experience</h2>
        <TechStack />
        <p className={styles.Paragraph}>
          I am a thoughtful software engineer confident and competent in
          planning, building and deploying full stack applications using the
          PERN stack (PostgreSQL, Express, React, Node). I am versed in and
          enjoy the creativity and psychology aspects of UX/UI Design as well
          systematic Test Driven Development writing, updating and debugging
          RESTful API's.
        </p>
        <p className={styles.Paragraph}>
          Lately I've been finding inspiration by getting into game development,
          learning Unity, C#, and Blender.
          {/* Creatively using code to express non-material and abstract ideas interests me. */}
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
