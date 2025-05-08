// app/layout.js
'use client';

import './globals.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import  AuthContext  from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <Layout>{children}</Layout>
        </AuthContext>
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
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h1 className="text-xl font-bold">PDL Rentals</h1>
        <nav className="space-y-2">
          <Link href="/" className="block hover:text-blue-400">Dashboard</Link>

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
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
