// scripts/generateNavItems.js
const fs = require('fs');
const path = require('path');

function getNavItems() {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  
  return entries
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('_') && entry.name !== 'api')
    .map(entry => ({
      name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
      path: `/${entry.name}`
    }));
}

const navItems = getNavItems();
fs.writeFileSync(
  path.join(process.cwd(), 'src', 'navItems.json'),
  JSON.stringify(navItems, null, 2)
);

console.log('Nav items generated successfully.');