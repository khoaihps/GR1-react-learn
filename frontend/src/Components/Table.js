import React, { useState } from 'react';
import { exportExcel, exportPDF } from '../utils/exportUtils';
export const Table = () => {
    const [data, setData] = useState([
        { id: 1, mssv: '123456', name: 'John Doe', dob: '01/01/1990', email: 'john@example.com' },
        { id: 2, mssv: '789012', name: 'Jane Smith', dob: '02/02/1995', email: 'jane@example.com' },
    ]);
    const [formData, setFormData] = useState({
        mssv: '',
        name: '',
        dob: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddRow = () => {
        const newData = [...data];
        const id = data.length + 1;
        newData.push({ id, ...formData });
        setData(newData);
        setFormData({
            mssv: '',
            name: '',
            dob: '',
            email: ''
        });
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleExportExcel = () => {
        exportExcel(data, 'students.xlsx'); // Gọi hàm xuất Excel
    };

    const handleExportPDF = () => {
        exportPDF(data, 'students.pdf'); // Gọi hàm xuất Excel
    };

    return (
        <div>
            <div className="max-w-sm border border-gray-300 rounded-lg p-4 mt-4">
                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <input type="text" name="mssv" value={formData.mssv} onChange={handleChange} placeholder="MSSV" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ và tên" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="Ngày sinh" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg" onClick={handleAddRow}>Thêm</button>
                </div>
            </div>

            <div className="mt-4">
                <div className="flex overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                    </table>
                </div>
            
                <div className="flex overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    STT
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    MSSV
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Họ và tên <br/>
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ngày sinh
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.mssv}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.dob}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-lg" onClick={() => handleDelete(index)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-4" onClick={handleExportExcel}>Export Excel</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg" onClick={handleExportPDF}>Export PDF</button>
            </div>
        </div>
    );
};
