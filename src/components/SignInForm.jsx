import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');

    const validate = () => {
        if (!email || !password) {
            setError('Email and password are required.');
            return false;
        }
        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            setUser(data.user);
            setAlert('Login successful!');
            setTimeout(() => {
                setAlert('');
                navigate('/');
            }, 1500);
        } else {
            setError(data.message || 'Sign in failed');
            setAlert('Login failed!');
            setTimeout(() => setAlert(''), 2000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
            <h2 className="text-2xl font-bold">Sign In</h2>
            {alert && (
                <div className={`p-2 rounded ${alert === 'Login successful!' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {alert}
                </div>
            )}
            {error && <div className="text-red-500">{error}</div>}
            <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" className="btn">Sign In pwease</button>
        </form>
    );
};

export default SignInForm;
