import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

import CallbackPage from './CallbackPage'; // Import your CallbackPage component
import LoginPage from './LoginPage';
import ConsentForm from './Consent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/consent" element={<ConsentForm />} />
            <Route path="/callbacks" element={<CallbackPage />} /> {/* Add a route for the callback page */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
