import * as React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    svg: '/plant.svg',
    title: 'Affirmation Garden',
    date: 'June | 2025',
    description:
      'A cozy online dashboard where you nurture your emotional wellbeing one flower and affirmation at a time.',
    tech: 'React | JavaScript | HTML | CSS | Firebase',
    link: 'https://github.com/abi-7/affirmation-app',
  },
  {
    id: 2,
    svg: '/coffee.svg',
    title: 'Coffee.Break',
    date: 'March | 2025',
    description:
      'A fun desktop application that alerts you when it is time for your coffee break! (creative implementation of a pomodoro timer)',
    tech: 'JavaScript | Electron.js | HTML | CSS',
    link: 'https://github.com/abi-7/coffee.break',
  },
  {
    id: 3,
    svg: '/pixel-guy.svg',
    title: 'Interactive About Me Page',
    date: 'August | 2024',
    description:
      'A playful and creative way to showcase my day-to-day life. Users can navigate a virtual house, interact with objects, and learn more about me through dialogue prompts.',
    tech: 'JavaScript | HTML | CSS',
    link: 'https://day-in-pixels.netlify.app/',
  },
  {
    id: 4,
    svg: '/guess.svg',
    title: 'Character Guessing Game',
    date: 'July | 2024',
    description:
      'This project is a fun and interactive guessing game based on Rick & Morty characters! Players are shown a random character image alongside four name options from the show and must guess the correct match.',
    tech: 'React | JavaScript | HTML | CSS',
    link: 'https://rick-n-morty-guess.netlify.app/',
  },
  {
    id: 5,
    svg: '/vase.svg',
    title: 'Kiln Connection',
    date: 'April | 2024',
    description:
      'An immersive CMS web platform connecting professional artists and pottery enthusiasts, "Kiln Connection" was created as my final project for a Web Development course using php.',
    tech: 'PHP | MySQL | HTML | CSS',
    link: 'https://github.com/abi-7/Kiln-Connection',
  },
  {
    id: 6,
    svg: '/lock.svg',
    title: 'Password Generator',
    date: 'July | 2024',
    description:
      'A password generator that allows users to create a secure password based on their preferences. Users can select the length of the password, inclusion of numbers, special characters, and uppercase letters.',
    tech: 'HTML | CSS | JavaScript',
    link: 'https://pass-wizard.netlify.app/',
  },
];

export function CardWithLink() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card) => (
        <motion.div
          className="flex w-full h-full"
          key={card.id}
          whileHover={{ scale: 1.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardBody className="flex-grow">
              <img
                src={card.svg}
                alt={card.title}
                className="mb-4 h-12 w-12 text-gray-900"
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography color="blue-gray" className="mb-2">
                {card.date}
              </Typography>
              <Typography className="mb-4">{card.description}</Typography>
              <Typography
                color="blue-gray"
                variant="h6"
                style={{ fontStyle: 'italic', color: '#555' }}
                className="mb-2"
              >
                {card.tech}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href={card.link} className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Check it out here !
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
