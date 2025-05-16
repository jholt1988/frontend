'use client';

import Link from 'next/link';
import { useContext } from 'react';
import AuthContext ,{ AuthProvider}  from '@/context/AuthContext';
import SidebarLayout from '@/components/SidebarLayout';
import { ToastProvider } from './components/ui/Toast/ToastProvider';
import { Modal } from './components/ui/Modal/Modal';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>
            <Modal>
            <SidebarLayout>{children}</SidebarLayout>
            </Modal>
          </ToastProvider>
        </AuthProvider> 
      </body>
    </html>
  );
}

function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-primary text-text flex flex-col">
      <ToastContainer />
      {/* Header */}
      <header className="header">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <h1 className="text-xl font-semibold">PDL Rentals</h1>
          <nav className="flex gap-4">
            {user ? (
              <>
                <Link href="/" className="hover:text-highlight">Home</Link>
                {user.role === 'tenant' && <Link href="/tenant-profile">Profile</Link>}
                {['staff', 'admin'].includes(user.role) && <Link href="/dashboard">Dashboard</Link>}
                <button onClick={logout} className="text-sm underline hover:text-highlight">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className='layout-container'>
        
          {children}

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} PDL Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}
