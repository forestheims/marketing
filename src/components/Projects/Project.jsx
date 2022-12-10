import { Link } from 'react-router-dom';
import styles from './Projects.css';

export default function Project({ project }) {
  const { title, github, link, coDevelopers, img, description, tags } = project;
  return (
    <div className={styles.Project}>
      <h2>{title}</h2>
      <ul>
        Tech Stack:
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className={styles.ProjectLinks}>
        <a className={styles.ProjectLink} href={link} target="_blank">
          Deployed Site
        </a>
        <a className={styles.ProjectLink} href={github} target="_blank">
          GitHub Repo
        </a>
      </div>
      <ul>
        Developers:
        {coDevelopers.map((dev) => (
          <li key={dev}>{dev}</li>
        ))}
      </ul>
      <p>{description}</p>
      <img className={styles.ProjectImg} src={img} />
    </div>
  );
}
