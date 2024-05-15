// CallbackPage.js
import React, { useEffect, useState } from 'react';
import './CallbackPage.css'; // Import CSS file for styling

const CallbackPage = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [scope, setScope] = useState("offline"); // Array for multiple scopes (optional)
  const [state, setState] = useState('');

  const[accessToken, setAccessToken] = useState('');
  const[refreshToken, setRefreshToken] = useState('');
  const[tokenType, setTokenType] = useState('');
  const[expiresIn, setExpiresIn] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code') || '';
    const scopeValue = searchParams.get('scope') || []; // Array for multiple scopes
    const stateValue = searchParams.get('state') || '';

    setAuthorizationCode(code);
    setScope(scopeValue);
    setState(stateValue);
  }, []);


  const getToken = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const access_token = searchParams.get('access_token') || '';
    const refresh_token = searchParams.get('refresh_token') || '';
    const token_type = searchParams.get('token_type') || '';
    const expires_in = searchParams.get('expires_in') || '';
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    setTokenType(token_type);
    setExpiresIn(expires_in);
    console.log({access_token, refresh_token, token_type, expires_in})
    console.log("Access Token: ", accessToken);
  }


  return (
    <>
     <div className="callback-container">
      <div className="callback-info">
      <h2>Token Details</h2>
      <div className="detail">
      <p>Authorization Code: {authorizationCode}</p>
      </div>
      <div className="detail">
      <p>Scope: {scope}</p>
      </div>
      <div className="detail">
      <p>State: {state}</p>
      </div>
      <form className="form-consent" method="post" action="http://localhost:8000/oauth2/token" >
          <input type="hidden" name="code" value={authorizationCode}/>
          <button className="exchange-code-button">Exchange Code</button>
      </form>
    </div>
    <div className="token-section">
      <button className="get-token-button" onClick={getToken}>Get Token</button>
            <p><b>Access Token:</b> {accessToken}</p>
            <p><b>Refresh Token:</b> {refreshToken}</p>
            <p><b>Token Type:</b> {tokenType}</p>
            <p><b>Expires In:</b> {expiresIn}</p>
          <div id="token-display"></div>
    </div>
    <br/>
    </div>
    </>
  );
};

export default CallbackPage;
