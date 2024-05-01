import { utils as XLSXUtils, writeFile as writeFileXLSX } from 'xlsx';
import jsPDF from 'jspdf';

export const exportExcel = (data, fileName) => {
    const worksheet = XLSXUtils.json_to_sheet(data); 

    const workbook = XLSXUtils.book_new(); 
    XLSXUtils.book_append_sheet(workbook, worksheet, 'Sheet1'); 

    writeFileXLSX(workbook, fileName);
};

export const exportPDF = (data, fileName) => {
    const doc = new jsPDF();

    const rows = [];
    const headers = Object.keys(data[0]);
    data.forEach((item, index) => {
        const row = headers.map(key => item[key]);
        rows.push(row);
    });

    doc.autoTable({ head: [headers], body: rows });

    doc.save(fileName);
};