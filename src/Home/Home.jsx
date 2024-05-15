import React from 'react';
import { ReactComponent as WorkFlowSVG } from './oathkeeper-hydra(OAuth2.0) workflow cprt.svg';
import './styles.css'; // Import external CSS file if needed

const Home = () => {
  return (
    <>
    <div className="home-container">
    <h3>OAuth2.0 workflow with reverse proxy(oathkeeper)</h3>
      <WorkFlowSVG className="workflow-svg" />
      <form className="form-consent" method="get" action="http://127.0.0.1:8000/oauth2/auth" >
          <button className="exchange-code-button">Getting Start</button>
      </form>
    </div>
    </>
  );
};

export default Home;
