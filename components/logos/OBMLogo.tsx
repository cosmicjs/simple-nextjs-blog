import React from 'react';

export default function OBMLogo({
  className,
}: {
  className: string;
}): React.ReactElement {
  return (
    <svg
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dark background circle */}
      <circle cx="125" cy="125" r="125" fill="#1E293B" />
      {/* Globe/earth representation - outer glow */}
      <circle cx="125" cy="125" r="90" fill="#1E3A5F" />
      {/* Globe main body */}
      <circle cx="125" cy="125" r="85" fill="#2563EB" />
      {/* Globe highlight/shine */}
      <ellipse cx="105" cy="100" rx="55" ry="60" fill="#3B82F6" opacity="0.7" />
      <ellipse cx="95" cy="90" rx="35" ry="40" fill="#60A5FA" opacity="0.5" />
      {/* Globe landmass shapes */}
      <path
        d="M95 65C100 60 115 55 125 58C135 61 140 70 138 80C136 90 125 95 118 92C111 89 105 82 100 75C95 68 90 70 95 65Z"
        fill="#34D399"
        opacity="0.8"
      />
      <path
        d="M140 100C148 95 158 98 162 108C166 118 163 130 155 135C147 140 138 138 132 130C126 122 132 105 140 100Z"
        fill="#34D399"
        opacity="0.7"
      />
      <path
        d="M80 110C88 105 98 110 100 120C102 130 95 142 85 145C75 148 68 140 70 130C72 120 72 115 80 110Z"
        fill="#34D399"
        opacity="0.6"
      />
      {/* Globe atmosphere edge highlight */}
      <circle cx="125" cy="125" r="85" fill="none" stroke="#93C5FD" strokeWidth="2" opacity="0.4" />
      {/* Specular highlight */}
      <ellipse cx="90" cy="80" rx="25" ry="20" fill="white" opacity="0.15" />
    </svg>
  );
}