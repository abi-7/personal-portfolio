import * as React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  const cards = [
    { id: 1, 
    title: 'Interactive about me page', 
    description: 'A playful and creative way to showcase my day-to-day life. Users can navigate a virtual house, interact with objects, and learn more about me through dialogue prompts.', 
    link: 'https://github.com/abi-7/2D-game'
    },
    { id: 2, 
    title: 'Kiln Connection', 
    description: 'An immersive web platform connecting professional artists and pottery enthusiasts, "Kiln Connection" was created as my final project for a Web Development course using php. The platform combines functionality and accessible design to provide users with a seamless experience.',
    link: 'https://github.com/abi-7/Kiln-Connection' 
    },
    { id: 3, 
    title: 'Character Guessing Game', 
    description: 'This project is a fun and interactive guessing game based on Rick & Morty characters! Players are shown a random character image alongside four name options from the show and must guess the correct match.',
    link: 'https://github.com/abi-7/character-game'
    },
  ];
  
  export function CardWithLink() {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {cards.map((card) => (
      <Card key={card.id} className="mt-6 w-96">
        <CardBody>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-gray-900"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          {card.title}
          </Typography>
          <Typography>
          {card.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={card.link} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2">
              Learn More
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
        ))}
    </div>
    );
  }