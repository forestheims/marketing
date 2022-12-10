import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import Project from './Project';
import styles from './Projects.css';

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <h2 className={styles.ProjectsTitle}>Web Developer Experience</h2>
      <Project
        project={{
          github: 'https://github.com/forestheims',
          link: '',
          coDevelopers: [],
          img: {},
          description: '',
          tags: [],
          title: '',
        }}
      />
      <Project
        project={{
          github: 'https://github.com/forestheims',
          link: '',
          coDevelopers: [],
          img: {},
          description: '',
          tags: [],
          title: '',
        }}
      />
    </div>
  );
}
