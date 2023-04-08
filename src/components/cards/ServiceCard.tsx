import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { fadeIn } from '../../utils';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: any;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const { index, title, icon } = props;

  return (
    <Tilt className={'xs:w-[250px] w-full'}>
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
