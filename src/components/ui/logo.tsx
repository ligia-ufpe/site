import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/logo.svg" 
        alt="Ligia Logo" 
        className="w-8 h-8 relative"
      />
      <span className="text-2xl font-bold text-white">Ligia</span>
    </Link>
  );
}