import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { fadeIn } from '../../utils';

type FeedbackCardProps = {
  index: number;
  name: string;
  image: any;
  url: string;
};

export const FeedbackCard = (props: FeedbackCardProps) => {
  const { index, name, image, url } = props;

  return (
    // <Tilt className="bg-tertiary rounded-3xl sm:w-[320px] w-[30px]">
    <Tilt className="bg-transparent xs:mb-9">
      <motion.div
        variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        className="flex justify-center items-center bg-black-200 p-10 rounded-3xl xs:w-[320px] w-[320px] xs:mb-2 "
      >
        <div
          className={'flex flex-col align-center justify-center cursor-pointer'}
          onClick={() => window.open(url)}
        >
          <div className={'w-[100px] h-[100px] mb-2'}>
            <img
              src={image}
              alt={`feedback_by-${name}`}
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
          </div>
          <p className={'text-center'}>{name}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
