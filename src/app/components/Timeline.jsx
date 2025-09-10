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
import { Calendar, MapPin } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: 'Observability Engineer',
    company: 'Optimiz',
    date: 'Sept 2025 - Present',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Collaborating with a team on observability solutions using Dynatrace to enhance system reliability, improve monitoring, and support performance optimization.',
    skills: ['Monitoring', 'DevOps', 'System Architecture'],
    color: ' bg-gray-800',
  },
  {
    id: 2,
    title: 'Associate Consultant',
    company: 'Optimiz',
    date: 'Jan 2025 - Apr 2025',
    location: 'Remote',
    type: 'Internship',
    description:
      'Collaborated on consulting projects, developed technical solutions, and gained experience in client-facing roles.',
    skills: ['Consulting', 'Problem Solving', 'Client Relations'],
    color: ' bg-gray-800',
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'ACE Project Space Co-op',
    date: 'May 2024 - Aug 2024',
    location: 'Hybrid',
    type: 'Co-op',
    description:
      'Developed and maintained web applications, collaborated with cross-functional teams, and implemented modern web technologies.',
    skills: ['React', 'JavaScript', 'Web Development'],
    color: ' bg-gray-800',
  },
];

export function DefaultTimeline() {
  return (
    <div className="relative">
      {/* Main timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="relative mb-8 last:mb-0">
          {/* Timeline node */}
          <div
            className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-white shadow-lg z-10`}
          ></div>

          {/* Content card */}
          <div className="ml-16 group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      {milestone.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-1 mt-2 sm:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {milestone.type}
                  </span>
                </div>
              </div>

              {/* Date and location */}
              <div className="flex flex-wrap items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{milestone.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{milestone.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className=" text-gray-800 leading-relaxed mb-4">
                {milestone.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {milestone.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-50 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
