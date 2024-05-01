import React from 'react';
import { DataTablePage } from './Routes/DataTablePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './output.css';
import { ImageGridPage } from './Routes/ImageGridPage';
import MazePage from './Routes/MazePage';
import { MapPage } from './Routes/MapPage';
import { BarChartPage } from './Routes/BarChartPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DataTablePage />} />
                <Route path="/data-table" element={<DataTablePage />} />
                <Route path="/image-grid" element={<ImageGridPage />} />
                <Route path="/maze" element={<MazePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/barchart" element={<BarChartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
