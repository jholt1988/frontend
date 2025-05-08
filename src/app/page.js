'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '@/context/AuthContext'
import Link from 'next/link';
import "globals.css";
export default function LandingPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      if (user.role === 'tenant') router.push('/tenant-profile');
      else router.push('/dashboard');
    }
  }, [user, loading]);

  if (loading) return <p className="p-6">Checking session...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl bg-white p-8 rounded shadow text-center space-y-6">
        <h1 className="text-3xl font-bold">Welcome to PDL Rentals</h1>
        <p className="text-gray-600">Your centralized platform for managing properties, tenants, and payments.</p>

        <div className="flex justify-center gap-4">
          <Link href="/login" className="btn btn-primary">Login</Link>
          <Link href="/register" className="btn btn-secondary">Register</Link>
        </div>

        <p className="text-xs text-gray-400">Staff/Admin? Login to manage tenants and requests.</p>
      </div>
    </div>
  );
}
