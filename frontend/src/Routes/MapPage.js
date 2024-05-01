import React from 'react';
import Map from '../Components/Map';
import Sidebar from '../Components/Sidebar';

export const MapPage = () => {
    return (
        <div>
            <Sidebar/>
            <div class="p-4 sm:ml-64">
                <Map />
            </div>
        </div>
    );
};
