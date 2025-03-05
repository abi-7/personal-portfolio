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
    svg: '/pixel-guy.svg',
    title: 'Interactive about me page',
    description:
      'A playful and creative way to showcase my day-to-day life. Users can navigate a virtual house, interact with objects, and learn more about me through dialogue prompts.',
    link: 'https://day-in-pixels.netlify.app/',
  },
  {
    id: 2,
    svg: '/vase.svg',
    title: 'Kiln Connection',
    description:
      'An immersive web platform connecting professional artists and pottery enthusiasts, "Kiln Connection" was created as my final project for a Web Development course using php.',
    link: 'https://github.com/abi-7/Kiln-Connection',
  },
  {
    id: 3,
    svg: '/guess.svg',
    title: 'Character Guessing Game',
    description:
      'This project is a fun and interactive guessing game based on Rick & Morty characters! Players are shown a random character image alongside four name options from the show and must guess the correct match.',
    link: 'https://rick-n-morty-guess.netlify.app/',
  },
  {
    id: 4,
    svg: '/coffee.svg',
    title: 'Coffee.Break',
    description:
      'A fun desktop application that alerts you when it is time for your coffee break! (creative implementation of a pomodoro timer)',
    link: 'https://github.com/abi-7/coffee.break',
  },
];

export function CardWithLink() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-visible">
      {cards.map((card) => (
        <motion.div
          className="w-full"
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
              <Typography>{card.description}</Typography>
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
