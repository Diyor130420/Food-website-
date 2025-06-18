'use client'; // 🧠 required to use hooks in app router
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmail = input.includes('@');
    const isPhone = /^\+?\d{8,15}$/.test(input.replace(/\s/g, ''));

    if (isEmail || isPhone) {
  const now = new Date().getTime();
  localStorage.setItem("loggedInAt", now.toString());
  localStorage.setItem("userInput", input); // optional

  setError('');
  router.push('/menu');
} else {
  setError('Please enter a valid email or phone number');
}
 }


  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Login to Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email or Phone Number</label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="you@example.com or +65 8123 4567"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
          >
            Continue to Menu
          </button>
        </form>
      </div>
    </div>
  );
}

