import styles from './Projects.css';

export default function Project({ project }) {
  console.log('project', project);
  return (
    <div className={styles.Project}>
      <p>{project.anime_name}</p>
      <img src={project.url} />
    </div>
  );
}
