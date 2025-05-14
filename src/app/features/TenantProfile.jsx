'use client';

import { useEffect, useState, useContext } from 'react';
import  AuthContext  from '@/context/AuthContext';
import {
  getTenantProfile,
  updateTenantProfile,
} from '../services/apiService';

export default function TenantProfilePage() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user?.id) {
      getTenantProfile(user.id).then((data) => {
        setProfile(data);
        setFormData(data);
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateTenantProfile(user.id, formData);
    setProfile(updated);
    setIsEditing(false);
  };

  if (!profile) return <div>Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Tenant Profile</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="phone" value={formData.phone || ''} onChange={handleChange} className="input" />
          <input name="address" value={formData.address || ''} onChange={handleChange} className="input" />
          <input type="date" name="leaseStart" value={formData.leaseStart || ''} onChange={handleChange} className="input" />
          <input type="date" name="leaseEnd" value={formData.leaseEnd || ''} onChange={handleChange} className="input" />
          <input type="number" name="rentAmount" value={formData.rentAmount || ''} onChange={handleChange} className="input" />
          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary">Save</button>
            <button onClick={() => setIsEditing(false)} type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      ) : (
        <div className="space-y-2">
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Lease Start:</strong> {profile.leaseStart}</p>
          <p><strong>Lease End:</strong> {profile.leaseEnd}</p>
          <p><strong>Rent:</strong> ${profile.rentAmount}</p>
          <button onClick={() => setIsEditing(true)} className="btn btn-primary mt-4">Edit</button>
        </div>
      )}
    </div>
  );
}
