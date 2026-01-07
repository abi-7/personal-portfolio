'use client';
import React from 'react';

export default function Footer() {
  return (
    <div className="flex flex-col items-center pt-[30px]">
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600">
        <a
          href="https://www.linkedin.com/in/abigail-ferreira/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
        >
          LinkedIn
        </a>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://github.com/abi-7/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
        >
          GitHub
        </a>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://www.instagram.com/devanddesigns/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
        >
          Instagram
        </a>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://www.buymeacoffee.com/abigailcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors"
        >
          Buy Me a Coffee
        </a>
      </div>
      <div className="text-center">
        <p className="text-gray-600">
          Developed and designed by Abigail Ferreira.
        </p>
        <p className="text-gray-600 ">&copy; 2026</p>
      </div>
    </div>
  );
}
