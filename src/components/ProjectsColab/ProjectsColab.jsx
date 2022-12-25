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
    </div>
  );
}
