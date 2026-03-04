import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Design2 from './components/Design2/Design2';
import Capabilities from './components/Capabilities/Capabilities';
import Quality from './components/Quality/Quality';
import NewsPage from './components/NewsPage/NewsPage';
import WhereAreWe from './components/WhereAreWe/WhereAreWe';
import ContactsPage from './components/ContactsPage/ContactsPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Design2 />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/news-page" element={<NewsPage />} />
          <Route path="/where-are-we" element={<WhereAreWe />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
