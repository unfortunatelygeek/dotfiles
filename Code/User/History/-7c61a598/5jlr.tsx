import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 150,
  height = 50,
  className = '',
  color = '#8CC63F', // Default green color, you can adjust this
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="10 -10 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M90 10C70 -10 10 30 10 70C10 110 70 110 90 90C110 70 110 30 90 10ZM80 80C65 95 20 80 20 70C20 40 65 10 80 25C95 40 95 65 80 80Z"
        fill={color}
      />
      <path
        d="M75 22C60 37 30 65 25 70"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
