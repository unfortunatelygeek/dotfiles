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
  color = '#8CC63F', // Default color, you can adjust this
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
        d="M50 10C30 10 15 25 15 45C15 65 30 80 50 80C70 80 85 65 85 45C85 25 70 10 50 10ZM50 70C35 70 25 60 25 45C25 30 35 20 50 20C65 20 75 30 75 45C75 60 65 70 50 70Z"
        fill={color}
      />
      <path
        d="M60 30C55 25 45 25 40 30C35 35 35 45 40 50C45 55 55 55 60 50C65 45 65 35 60 30Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
