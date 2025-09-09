import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');   
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();    

    try {
      const response = await fetch(`http://localhost:3000/api/users/register`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
    }
    if (result.success) {
      setToken(result.token);
      alert('Registration successful!');
      navigate('/login');
    }


  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
    </div>
  );
} };  

export default Register