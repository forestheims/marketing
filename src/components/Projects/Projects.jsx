import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import Project from './Project';
import styles from './Projects.css';

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <p>Projects</p>
      <Project
        project={{
          github: '',
          link: '',
          coDevelopers: [],
          img: {},
          description: '',
          tags: [],
        }}
      />
      <Project
        project={{
          github: '',
          link: '',
          coDevelopers: [],
          img: {},
          description: '',
          tags: [],
        }}
      />
    </div>
  );
}
