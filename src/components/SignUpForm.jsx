import React, { useState } from 'react';

const SignUpForm = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (res.ok) {
                alert('User registered. Please sign in.');
                setForm({ name: '', email: '', password: '' });
            } else {
                alert(data.message || 'Sign up failed');
            }
        } catch (err) {
            alert('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
            <h2 className="text-2xl font-bold">Sign Up</h2>
            <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
        </form>
    );
};

export default SignUpForm;
