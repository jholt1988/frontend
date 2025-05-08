// app/layout.js
'use client';

import './globals.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import AuthContext ,{ AuthProvider}  from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider> 
      </body>
    </html>
  );
}

function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 px-4 py-4 leading-10">

   
    <h1 className="text-xl font-bold">PDL Rentals</h1>
        <p className="text-sm">Welcome, {user?.name || 'Guest'}</p>
        <p className="text-sm">Role: {user?.role || 'Guest'}</p>
       
    <div className="p-4 w-full bg-fuchsia-700 rounded-xl row-span-2 col-span-2">&nbsp;
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <nav className="space-y-2">
          {user?.role === 'tenant' || user?.role === 'admin' && (
            <>
              <Link href="/" className="block hover:text-blue-400">Dashboard</Link>
            </>
          )}
          {user?.role === 'tenant' && (
            <>
              <Link href="/tenant-profile" className="block hover:text-blue-400">My Profile</Link>
              <Link href="/maintenance-request" className="block hover:text-blue-400">Submit Maintenance</Link>
            </>
          )}
          {['staff', 'admin'].includes(user?.role) && (
            <>
              <Link href="/maintenance" className="block hover:text-blue-400">View Maintenance</Link>
              <Link href="/payments" className="block hover:text-blue-400">Payments</Link>
            </>
          )}
          {user?.role === 'tenant' && (
            <Link href="/payments/history" className="block hover:text-blue-400">
              My Payments
            </Link>
          )}
          {['admin', 'staff'].includes(user?.role) && (
            <Link href="/dashboard" className="block hover:text-blue-400">
              Dashboard
            </Link>
          )}
          {['staff', 'admin'].includes(user?.role) && (
            <Link href="/tenants" className="block hover:text-blue-400">Tenant Directory</Link>
          )}
          <button onClick={handleLogout} className="mt-4 text-red-400 hover:text-red-300">
            Logout
          </button>
        </nav>
      </aside>
      <div className="flex p-4 w-full justify-items-center bg-fuchsia-900 rounded-xl row-span-3">&nbsp;
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
      <footer className="w-full bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2023 PDL Rentals. All rights reserved.</p>
        </footer>
        </div>
      </div>
      </div>
  
      
  );
}
   
