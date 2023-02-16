import ProjectsColab from '../ProjectsColab/ProjectsColab';
import ProjectsSolo from '../ProjectsSolo/ProjectsSolo';
import styles from './Projects.css';

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <ProjectsColab />
      {/* <ProjectsSolo /> */}
    </div>
  );
}
