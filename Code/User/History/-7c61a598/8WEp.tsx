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
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M80 20C60 0 20 0 20 40C20 80 60 100 80 80C100 60 100 40 80 20ZM70 70C55 85 30 70 30 40C30 10 55 15 70 30C85 45 85 55 70 70Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
