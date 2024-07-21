// src/components/Navbar.tsx
import Link from 'next/link';

type NavItem = {
  name: string;
  path: string;
};

type NavbarProps = {
  items: NavItem[];
};

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}