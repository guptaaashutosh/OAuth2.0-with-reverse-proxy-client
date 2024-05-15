import React, { useEffect, useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginChallenge, setLoginChallenge] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const challenge = searchParams.get('login_challenge');
    setLoginChallenge(challenge);
  }, []);


  return (
    <div className="login-form">
      <h2>Login</h2>
      <p>Please enter your email and password to log in.</p>
       <form method="post" action="http://localhost:8000/login">
        <div className="form-group">
        <input type="hidden" name="login_challenge" value={loginChallenge}/>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember_me" name="remember_me" value="true" />
          <label htmlFor="remember_me">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
