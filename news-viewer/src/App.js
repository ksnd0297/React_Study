import React, { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import NewsPage from './pages/NewsPage';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <Routes>
      <Route path="/:category" element={<NewsPage />} />
      <Route path="/" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
