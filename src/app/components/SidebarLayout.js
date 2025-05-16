'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthContext from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function SidebarLayout({ children }) {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const NavItem = ({ href, label }) => (
    <Link
      href={href}
      className={`block px-4 py-2 rounded hover:bg-accent ${
        pathname === href ? 'bg-accent text-primary' : ''
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="sidebar">
      {/* Sidebar */}
      <aside className={`w-64 bg-secondary p-4 transition-all duration-300 ${open ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-bold mb-6">PDL Rentals</h2>
        <nav className="space-y-2">
          <NavItem href="/" label="Home" />
          {user?.role === 'tenant' && (
            <>
              <NavItem href="/tenant-profile" label="My Profile" />
              <NavItem href="/maintenance-request" label="Submit Maintenance" />
              <NavItem href="/payments/history" label="My Payments" />
            </>
          )}
          {['staff', 'admin'].includes(user?.role) && (
            <>
              <NavItem href="/dashboard" label="Admin Dashboard" />
              <NavItem href="/maintenance" label="Maintenance Requests" />
              <NavItem href="/payments" label="Payments" />
              <NavItem href="/tenants" label="Tenant Directory" />
            </>
          )}
        </nav>
        {user && (
          <button onClick={logout} className="mt-6 text-sm text-highlight underline">
            Logout
          </button>
        )}
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-secondary p-4 flex justify-between items-center md:hidden">
          <h1 className="text-lg font-semibold">PDL</h1>
          <button
            onClick={() => setOpen(!open)}
            className="text-text bg-accent rounded px-3 py-1 text-sm"
          >
            {open ? 'Hide Menu' : 'Show Menu'}
          </button>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <div className="flex items-center gap-3">
  <ThemeToggle />
</div>
        <footer className="footer mt-auto text-center py-3">
          <p className="text-sm">© {new Date().getFullYear()} PDL Rentals</p>
        </footer>
      </div>
    </div>
  );
}
