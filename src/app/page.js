'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '@/context/AuthContext'
import Link from 'next/link';
import "globals.css";
export default function LandingPage() {
  

  



  return (
    <div className="layout-container">
      <div className="max-w-xl bg-white p-8 rounded shadow text-center space-y-6">
        <h1 className="text-3xl font-bold">Welcome to PDL Rentals</h1>
        <p className="text-gray-600">Your centralized platform for managing properties, tenants, and payments.</p>

        <div className="text-center flex justify-center gap-4">
         <div> <Link href="/login" className="btn btn-primary">Login</Link></div>
          <div><Link href="/register" className="btn btn-secondary">Register</Link></div>
        </div>

        <p className="text-xs text-gray-400">Staff/Admin? Login to manage tenants and requests.</p>
      </div>
    </div>
  );
}
