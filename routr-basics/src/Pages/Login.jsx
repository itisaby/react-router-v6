import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setUser}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
        if(!name || !email) {
            return;
        }
        setUser({
            name: name,
            email: email
        })
        navigate('/dashboard');
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <h5>Login</h5>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <label>Email:</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login