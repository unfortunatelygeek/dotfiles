// src/components/Navbar.tsx
import Link from 'next/link';
import navItems from '@/navItems.json';

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navItems.map((item: { path: string; name: string }) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}