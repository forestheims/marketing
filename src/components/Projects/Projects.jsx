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
          github: 'https://github.com/geo-tone/geo-tone-frontend',
          link: 'https://geo-tone.netlify.app/',
          coDevelopers: [
            'Michelle Nygren',
            'Jordan Laurent',
            'Minoka Kakizaki',
            'Forest Heims',
          ],
          img: '/images/projects/geo-tone.PNG',
          description: 'Social synthesizer app',
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
          description: 'Pixel art editor',
          tags: ['HTML', 'CSS', 'JavaScript'],
          title: 'PIXL',
        }}
      />

      {/* <Project
        project={{
          github: 'https://github.com/forestheims',
          link: '',
          coDevelopers: [],
          img: {},
          description: '',
          tags: [],
          title: '',
        }}
      /> */}
    </div>
  );
}
