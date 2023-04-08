import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { withSectionWrapper } from '../../hoc';
import { textVariant } from '../../utils';
import { testimonials } from '../../constants';
import { FeedbackCard } from './FeedbackCard';

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(1)}>
          <p className={styles.sectionSubText}>
            <span className={'text-yellow-300'}>Look around</span> and{' '}
            <span className={'text-yellow-300'}>visit</span> my playground
          </p>
          <h2 className={styles.sectionHeadText}>My Playgrounds. 🤩</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default withSectionWrapper(Feedbacks, 'feedback');
