import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils';

interface withSectionWrapperProps {
  // Component: () => React.ComponentType;
  Component: any;
  idName: string | any;
}

export function withSectionWrapper<T = any>(
  // Component: React.ComponentType<T & withSectionWrapperProps>,
  Component: React.ComponentType<any>,
  idName: any | string
) {
  const HOC: React.FC<T & withSectionWrapperProps> = (props) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  return HOC;
}

// function HOC() {
//   return (
//       <motion.section
//         variants={staggerContainer()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//         className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
//       >
//         <span className="hash-span" id={idName}>
//           &nbsp;
//         </span>
//         <Component />
//       </motion.section>
//   )
// }
