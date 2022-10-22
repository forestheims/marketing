import styles from './Home.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useFollowPointer } from '../../hooks/useFollowPointer';

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const variants = {
    entryPage: (i) => ({
      x: x + Math.cos(1),
      y: y + Math.sin(1),
      transition: {
        type: 'spring',
        damping: (i + 2) / 2,
        stiffness: (i + 2) * 2,
        restDelta: 0.01 * i,
      },
    }),
  };

  let anArray = new Array(33).fill('');

  return (
    <div className={styles.Home}>
      {anArray.map((value, i) => (
        <motion.div
          key={i}
          className={styles.thirtyThree}
          custom={i}
          animate="entryPage"
          variants={variants}
          value={value}
          ref={ref}
          whileHover={{ color: 'rgb(45, 120, 98)' }}
          whileTap={{ opacity: 0 }}
        ></motion.div>
      ))}
    </div>
  );
}
