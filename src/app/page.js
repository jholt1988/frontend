'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import './globals.css'; // Ensure you have your global styles imported

export default function LandingPage() {
  return (
    <main className="main-content">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-secondary p-10 rounded-xl shadow-xl max-w-xl w-full text-center space-y-6"
      >
        <h1 className="text-4xl font-bold">Welcome to PDL Rentals</h1>
        <p className="text-base text-gray-400">
          A smarter way to manage properties, tenants, and maintenance.
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/login"
            className="px-5 py-2 rounded bg-accent text-primary font-semibold hover:bg-highlight transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 rounded border border-accent text-accent hover:bg-accent hover:text-primary transition"
          >
            Register
          </Link>
        </div>

        <p className="text-sm text-gray-500 pt-4">
          Staff or Admin? Log in to access the dashboard.
        </p>
      </motion.div>
    </main>
  );
}
