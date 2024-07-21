import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 150,
  height = 50,
  className = '',
}) => {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="Company Logo"
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default Logo;
