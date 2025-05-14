'use client';

import { useState, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { registerUser } from '@/services/authService';

export default function RegisterPage() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    leaseStart: '',
    leaseEnd: '',
    rentAmount: '',
    role: '', // default role
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { token } = await registerUser(formData);
      login(token); // auto-login after registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">Register</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input name="name" placeholder="Full Name" required onChange={handleChange} className="input" />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="input" />
        <input name="password" type="password" placeholder="Password" required onChange={handleChange} className="input" />

        <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
        <input name="address" placeholder="Address" onChange={handleChange} className="input" />
        <input name="leaseStart" type="date" placeholder="Lease Start" onChange={handleChange} className="input" />
        <input name="leaseEnd" type="date" placeholder="Lease End" onChange={handleChange} className="input" />
        <input name="rentAmount" type="number" step="0.01" placeholder="Rent Amount" onChange={handleChange} className="input" />
        <select name="role" onChange={handleChange} className="input">
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
