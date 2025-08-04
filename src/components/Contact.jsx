import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Contact submitted');
      setForm({ firstname: '', lastname: '', email: '' });
    } else {
      alert(data.message || 'Submit failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow bg-gray-transparent">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Page</h1>
      <div className="mb-8 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">My Contact Information</h2>
        <p className="mb-1"><strong>Email:</strong> safaltiwari2@gmail.com</p>
        <p className="mb-1"><strong>Phone:</strong> +1 647-229-8989</p>
        <p><strong>Address:</strong> 123 Main St, Toronto, Canada</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            First Name:
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Email Address:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
