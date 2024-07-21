import { redirect } from 'next/navigation';

function Dashboard() {
  redirect('/dashboard/products');
}

export default Dashboard;
