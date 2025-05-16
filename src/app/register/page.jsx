'use client';

import { useState, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { registerUser } from '@/services/authService';
import { toast } from 'react-toastify';
import Link from 'next/link';
export default function RegisterPage() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
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
      login(token);
      toast.success("Registration successful!") // auto-login after registration
    } catch (error) {
      toast.error(error.message || "Registration failed");
  }  finally {
      setLoading(false);
    }
  };
  
  

  return (
     <div style={{ textAlign: "center", padding: "50px" }}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={ handleChange } required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={ handleChange } required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={ handleChange } required />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={ handleChange } required />
                    </div>
                    <select name="role" value={formData.role} onChange={ handleChange } required>
                        <option value="Tenant">Tenant</option>
                        <option value="Admin">Admin</option>
                        <option value="Contractor">Contractor</option>
                    </select>
    
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </div>
        );
    };