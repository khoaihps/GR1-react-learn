import React from 'react';
import Sidebar from '../Components/Sidebar';
import BarChart from '../Components/BarChart';

export const BarChartPage = () => {
    return (
        <div>
            <Sidebar/>
            <div class="p-4 sm:ml-64">
                <BarChart/>
            </div>
        </div>
        
    );
};