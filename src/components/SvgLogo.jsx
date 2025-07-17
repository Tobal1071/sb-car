import React from 'react';

export const SvgLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SB CARS Logo"
  >
    <style>
      {`.sb-s { font-family: serif; font-size: 60px; font-weight: bold; fill: #1C1C1C; }
        .sb-b { font-family: serif; font-size: 60px; font-weight: bold; fill: #B9574B; }
        .sb-cars { font-family: serif; font-size: 40px; font-weight: normal; fill: #1C1C1C; }`}
    </style>
    <text x="10" y="55" className="sb-s">S</text>
    <text x="50" y="55" className="sb-b">B</text>
    <text x="95" y="55" className="sb-cars">CARS</text>
  </svg>
);