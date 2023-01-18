import ProjectSoloCard from './ProjectSoloCard';
import styles from './ProjectsSolo.css';

export default function ProjectsSolo() {
  return (
    <div className={styles.ProjectsSolo}>
      <h2 className={styles.SoloHTwo}>Personal Projects</h2>
      <ProjectSoloCard />
      <ProjectSoloCard />
      <ProjectSoloCard />
      <ProjectSoloCard />
      <ProjectSoloCard />
      <ProjectSoloCard />
      <ProjectSoloCard />
    </div>
  );
}
