import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import Project from './Project';
import styles from './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://nekos.best/api/v2/blush')
        .then((response) => response.json())
        .then((json) => setProjects(json.results));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.Projects}>
      <p>Projects</p>
      {projects.map((project) => (
        <Project key={Math.random(20)} project={project} />
      ))}
    </div>
  );
}
