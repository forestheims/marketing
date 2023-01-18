import { Link } from 'react-router-dom';
import styles from './ProjectsColab.css';

export default function Project({ project }) {
  const { title, github, link, coDevelopers, img, description, tags } = project;
  return (
    <div className={styles.SpanContainer}>
      <div className={styles.Project}>
        <h2 className={styles.ProjectTitle}>{title}</h2>
        <p className={styles.ProjectDescription}>{description}</p>
        <ul className={styles.ProjectTechStack}>
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
        <p>Developers:</p>
        <ul className={styles.ProjectDevelopers}>
          {coDevelopers.map((dev) => (
            <li key={dev} className={styles.ProjectDeveloperLink}>
              {dev}
            </li>
          ))}
        </ul>
        <img className={styles.ProjectImg} src={img} />
      </div>
    </div>
  );
}
