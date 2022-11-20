import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <React.Fragment>
      <div>
        <Router>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
