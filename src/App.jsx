import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Design2 from './components/Design2/Design2';
import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design2" element={<Design2 />} />
          <Route path="/meet-our-team" element={<MeetOurTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
