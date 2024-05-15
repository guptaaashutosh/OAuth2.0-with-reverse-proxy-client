import React, { useEffect, useState } from 'react';
import './ConsentForm.css'; // Import CSS file for styling

const ConsentForm = () => {
    const [consentChallenge, setConsentChallenge] = useState('');
  
    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const consent_challenge = searchParams.get('consent_challenge');
      setConsentChallenge(consent_challenge);
    }, []);

  return (
    <>
    <div className="consent-container">
            <h1>Authorize An App</h1>
            <div className="form-container">
      <form className="form-consent" method="post" action="http://localhost:8000/consent">
      <input type="hidden" name="consent_challenge" value={consentChallenge}/>
      <p className="scopes-text">This app is requesting access to the following scopes:</p>
        <div className="form-check">
            <input type="checkbox" name="grant_scope" id="offline-checkbox" value="offline" checked />
            <input type="hidden" name="grant_scope" value="offline" />
            <label htmlFor="offline-checkbox" className="form-check-label">Offline Access</label>
        </div>
        <button className="btn btn-primary" type="submit">Authorize</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ConsentForm;
