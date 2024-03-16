import React from 'react';
import Sidebar from './Components/Sidebar';
import { DataTable } from './Routes/DataTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ImageGrid } from './Routes/ImageGrid';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<DataTable />} />
                <Route path="/data-table" element={<DataTable />} />
                <Route path="/image-grid" element={<ImageGrid />} />
            </Routes>
        </Router>
  );
}

export default App;
