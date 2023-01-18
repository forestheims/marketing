import React from 'react';
import { NavLink } from 'react-router-dom';
import TechStack from '../TechStack/TechStack';
import styles from './AboutDev.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Computer stuff</h2>
        <TechStack />
        <p className={styles.Paragraph}></p>
      </article>
    </div>
  );
}
