'use client'
import * as React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
   
  const milestones = [
    { id: 1, 
    title: 'Associate Consultant - Optimiz Internship',
    date: 'Jan 2025 - Present | Remote', 
    description: '', 
    },
    { id: 2, 
    title: 'Web Developer - ACE Project Space Co-op', 
    date: 'May 2024 - Aug 2024 | Winnipeg, Manitoba, Canada · Hybrid',
    description: '',
    },
  ];

  export function DefaultTimeline() {
    return (
      <div className="">
        {milestones.map((milestone) => (
        <Timeline key={milestone.id}>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                {milestone.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
            <Typography variant="" color="blue-gray" className="leading-none">
                {milestone.date}
              </Typography>
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                {milestone.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
        ))}
      </div>
    );
  }