import React from 'react';

import { technologies } from '../constants';
import { withSectionWrapper } from '../hoc';
import { BallCanvas } from './canvas/ball';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default withSectionWrapper(Tech, 'tech');
