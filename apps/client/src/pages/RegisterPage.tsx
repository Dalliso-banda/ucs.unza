import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert("Registration successful! Please login.");
      navigate('/login');
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <h2 className="mb-6 text-3xl font-extrabold text-white text-center">Join UCS</h2>
        <input 
          type="text" placeholder="Username" required className="mb-4 w-full rounded-lg bg-slate-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({...form, username: e.target.value})}
        />
        <input 
          type="email" placeholder="Email" required className="mb-4 w-full rounded-lg bg-slate-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        <input 
          type="password" placeholder="Password" required className="mb-6 w-full rounded-lg bg-slate-700 p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30">
          Create Account
        </button>
      </form>
    </div>
  );
}
