import { getNavItems } from '@/utils/getNavItems';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = getNavItems();

  return (
    <html lang="en">
      <body>
        <Navbar items={navItems} />
        <main>{children}</main>
      </body>
    </html>
  );
}