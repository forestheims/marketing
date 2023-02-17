import { useEffect, useState } from 'react';
import Project from './ProjectColabCard';
import styles from './ProjectsColab.css';

export default function ProjectsColab() {
  return (
    <div className={styles.Projects}>
      <h2 className={styles.ProjectsTitle}>Projects I've Collaborated On</h2>
      <Project
        project={{
          github: 'https://github.com/geo-tone/geo-tone-frontend',
          link: 'https://geo-tone.netlify.app/',
          coDevelopers: [
            'Michelle Nygren',
            'Jordan Laurent',
            'Minoka Kakizaki',
            'Forest Heims',
          ],
          img: '/images/projects/geo-tone.PNG',
          description:
            'Geo Tone is a full-stack browser-based audio sequencer built using React, Reactronica (from Tone.js), CSS3, Framer Motion, PostgreSQL and Express. Geo Tone exists to make music fun - letting new-to-synth users experiment with customized audio effects. On the frontend, user data is hashed and encrypted; on the backend, data is managed in SQL.',
          tags: [
            'PostgreSQL',
            'Express.js',
            'React.js',
            'Node.js',
            'Netlify',
            'Heroku',
          ],
          title: 'Geo Tone',
        }}
      />
      <Project
        project={{
          github: 'https://github.com/PIXLAPP/pixel-art-project',
          link: 'https://pixlapp.github.io/pixel-art-project/',
          coDevelopers: [
            'Emma Egstad',
            'Ian Christiansen',
            'Violet Stewart',
            'Forest Heims',
          ],
          img: '/images/projects/pixl.PNG',
          description:
            'PIXL is an application that allows the user to select grid section and modify its color to create a piece of pixel art. Users are able to save and display their artwork on a gallery page via local storage.',
          tags: ['HTML', 'CSS', 'JavaScript'],
          title: 'PIXL',
        }}
      />
    </div>
  );
}
