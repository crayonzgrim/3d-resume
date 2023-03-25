import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type experienceType = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
};

type ExperienceCardProps = {
  experience: experienceType;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const {
    experience: { title, date, icon, iconBg, company_name, points }
  } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div>
          <img
            src={icon}
            alt={company_name}
            className="w=[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
