import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { withSectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils';
import { ProjectCard } from './ProjectCard';

export const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Personal Projects.</h2>
      </motion.div>

      <div className={'w-full flex'}>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          아래 프로젝트를 통해 저의 경험을 보여드릴 수 있을 것 같습니다. 내 각
          프로젝트의 소스코드를 보고 싶으시다면 깃허브 아이콘을 클릭하면 이동할
          수 있습니다.
          <br />
          프로젝트를 통해 문제를 해결하는 능력, 다양한 프론트엔드 기술에 대한
          호기심, 배우고 익히는데 열려있는 마음, 작업하는 능력 등을 보여드리고
          싶었습니다.
          <br />
          현재는 Next.js, three.js, react-three/fiber, @react-three/drei 등을
          익히기 위해 다양한 예시를 만들어보고 있습니다.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default withSectionWrapper(Works, 'works');
