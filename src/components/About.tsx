import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils';
import { ServiceCard } from './cards';
import { withSectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        저는 HTML, CSS, Javascript와 TypeScript에 대한 경험을 바탕으로 React.js,
        Next.js, Three.js 등과 같은 라이브러리와 프레임워크를 이용한 전문적인
        웹/앱 프론트엔드 개발자가 되고 싶은 개발자입니다. <br /> 저는 UI/UX를
        구현할 때 사용자의 시원한 사용성을 고민하며, 효율적이고 확장 가능한
        코딩을 하려고 노력합니다.
        <br />
        또한, 조금씩이라도 매일 공부하면서 하루 하루 나아지도록 노력하고 있으며,
        끊임없이 부족한 부분을 채우고 자기 개발을 하기 위해 몰두하고 있습니다.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default withSectionWrapper(About, 'about');
