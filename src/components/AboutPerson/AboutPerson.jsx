import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AboutPerson.css';

export default function About() {
  return (
    <div className={styles.About}>
      <article>
        <h2 className={styles.AboutHTwo}>Person</h2>
        <p className={styles.Paragraph}></p>
        <p className={styles.Paragraph}></p>
        <p className={styles.Paragraph}></p>
      </article>
    </div>
  );
}
