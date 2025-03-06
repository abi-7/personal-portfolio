'use client';
import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react';

const milestones = [
  {
    id: 1,
    title: 'Open Data Datathon',
    date: 'March | 2025',
    description:
      'Limited time to dive into the City of Winnipeg’s open data APIs, analyze the datasets available, and craft a meaningful project—only to present it in a 3 minute pitch to the judges!',
    link: 'https://www.linkedin.com/posts/abigail-ferreira_opendata-datathon-winnipegtech-activity-7302803161310711808-z_Hz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADL4oJgBQfKW5GNhnMm6po42kqI2IxuKFvo',
  },
  {
    id: 2,
    title: 'Sprint To Innovate',
    date: 'February | 2024',
    description:
      '48hrs to tackle a problem statement and come up with an innovative tech solution! Our team tackled a problem statement from the City of Winnipeg and came up with the Communioty Safety Ecosystem!',
    link: 'https://www.linkedin.com/posts/abigail-ferreira_what-an-incredible-journey-these-past-few-activity-7161208909800640512-Z8mT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADL4oJgBQfKW5GNhnMm6po42kqI2IxuKFvo',
  },
  {
    id: 3,
    title: 'HYPER ',
    date: 'May 2024 - Aug 2024 | Hybrid',
    description: '',
  },
  {
    id: 4,
    title: 'Game Jam',
    date: 'February | 2023',
    description: '',
    link: 'https://www.linkedin.com/posts/abigail-ferreira_rrc-gamejam-activity-7036050753064488961-Gc-Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAADL4oJgBQfKW5GNhnMm6po42kqI2IxuKFvo',
  },
];

export function EventsTimeline() {
  return (
    <div>
      {milestones.map((milestone) => (
        <Timeline key={milestone.id}>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="w-5 h-5 sm:w-5 sm:h-5" />
              <Typography
                variant="h5"
                color="blue-gray"
                className="leading-none sm:text-lg md:text-xl"
              >
                {milestone.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant=""
                color="blue-gray"
                className="leading-none pt-3 pb-3 text-sm sm:text-sm"
              >
                {milestone.date}
              </Typography>
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600 text-xs sm:text-sm"
              >
                {milestone.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
}
