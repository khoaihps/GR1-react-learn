import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Table } from '../Components/Table';

export const DataTablePage = () => {
    return (
        <div>
            <Sidebar/>
            <div class="p-4 sm:ml-64">
                <Table/>
            </div>
        </div>
        
    );
};