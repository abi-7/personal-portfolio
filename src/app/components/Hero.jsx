'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen 
                    bg-[#a2b2fc] pt-[150px]"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">Abigail Ferreira</h1>
        <p className="mt-[40px] text-3xl text-gray-700">
          I combine creativity with tech to make cool things :)
        </p>
      </div>

      <div className="relative w-4/5 sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div
          className="mt-[90px] w-full h-16 px-8 py-4 border border-gray-300 
                        rounded-full bg-white flex items-center justify-between"
        >
          <div className="text-3xl text-black">
            <TypeAnimation
              sequence={[
                'Hello World.', // Text to type
                2000, // Wait 2 seconds before deleting
                '', // Delete
              ]}
              wrapper="span"
              speed={50} // Typing speed (higher = faster)
              deletionSpeed={75} // Deletion speed
              repeat={Infinity} // Loop infinitely
            />
          </div>
        </div>
      </div>
    </div>
  );
}
