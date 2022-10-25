import styles from './DivDots.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useFollowPointer } from '../../../hooks/useFollowPointer';
import { useIsMedium, useIsSmall } from '../../../hooks/useMediaQuery';

export default function DivDots() {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
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
  //   isSmall && isMedium
  //     ? {
  //         entryPage: (i) => ({
  //           x: x,
  //           y: y,
  //         }),
  //       }
  //     : isSmall
  //     ? {
  //         entryPage: (i) => ({
  //           x: x + Math.cos(1),
  //           y: y + Math.sin(1),
  //           transition: {
  //             type: 'spring',
  //             damping: (i + 2) / 2,
  //             stiffness: (i + 2) * 2,
  //             restDelta: 0.01 * i,
  //           },
  //         }),
  //       }
  //     : {
  //         entryPage: (i) => ({
  //           x: x,
  //           y: y,
  //           transition: {
  //             type: 'spring',
  //             damping: (i + 2) / 2,
  //             stiffness: (i + 2) * 2,
  //             restDelta: 0.01 * i,
  //           },
  //         }),
  //       };

  let anArray = new Array(33).fill('');

  return (
    <div className={styles.DivDots}>
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
