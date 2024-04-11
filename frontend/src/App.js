import React from 'react';
import { DataTablePage } from './Routes/DataTablePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ImageGridPage } from './Routes/ImageGridPage';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<DataTablePage />} />
                <Route path="/data-table" element={<DataTablePage />} />
                <Route path="/image-grid" element={<ImageGridPage />} />
            </Routes>
        </Router>
  );
}

export default App;
