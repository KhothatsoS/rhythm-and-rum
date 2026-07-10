"use client";

import React from 'react';
import { Button } from './components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 
          className="text-8xl md:text-9xl mb-4 text-[#C6A75E]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          404
        </h1>
        <h2 
          className="text-3xl md:text-4xl mb-6 text-[#F5F5F5]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Page Not Found
        </h2>
        <p 
          className="text-lg text-[#F5F5F5]/70 mb-8"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          The page you're looking for seems to have wandered off the stage.
        </p>
        <Button variant="primary" size="lg" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}