'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#fdcce0] pt-[150px]">

      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Abigail Ferreira
        </h1>
        <p className="mt-[40px] text-3xl text-gray-600">
         I combine creativity with tech to make cool things :)
        </p>
      </div>

      <div className="relative w-4/5 sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="mt-[90px] w-full h-16 px-8 py-4 border border-gray-300 rounded-full bg-white flex items-center justify-between">
          <div className="text-3xl text-black">
          <Typewriter
            options={{
              strings: ['Hello World.'], // Text to type
              autoStart: true, // Start typing automatically
              loop: true, // Loop the animation
              delay: 150, // Typing speed (in milliseconds)
              deleteSpeed: 75, // Deleting speed (in milliseconds)
            }}
          />
          </div>
        </div>
      </div>

      
    </div>
  );
}
