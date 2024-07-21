import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Home() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Content for Item One */}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/item-two">Item Two</NavigationMenuLink>
        </NavigationMenuItem>
        {/* Add more NavigationMenuItems as needed */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
