// src/components/CircularProgressBar.jsx
import React from 'react';

const CircularProgressBar = ({ percentage, label }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-500"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <text
          x="40"
          y="40"
          dy="0.3em"
          textAnchor="middle"
          className="text-blue-500 text-xl font-bold"
        >
          {percentage}%
        </text>
      </svg>
      <span className="mt-2 text-sm font-medium">{label}</span>
    </div>
  );
};

export default CircularProgressBar;
