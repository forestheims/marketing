import { useState } from 'react';
import styles from './TechStack.css';

export default function TechStack() {
  const [techStack, setTechStack] = useState([
    'html',
    'css',
    'javascript',
    'node',
    'react',
    'postgresql',
  ]);
  return (
    <div className={styles.TechStack}>
      {techStack.map((tech) => {
        return (
          <div className={styles.Tech} key={tech}>
            <img className={styles.Logo} src={`./images/tech/${tech}.png`} />
          </div>
        );
      })}
    </div>
  );
}
