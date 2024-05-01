import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [xValues, setXValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [yValues, setYValues] = useState(xValues.map(() => faker.datatype.number({ min: 0, max: 1000 })));

    const handleChange = (index, value) => {
      const newYValues = [...yValues];
      newYValues[index] = value;
      setYValues(newYValues);
    };

    const handleAddRow = () => {
      const newXValues = [...xValues, xValues.length + 1];
      const newYValues = [...yValues, 0];
      setXValues(newXValues);
      setYValues(newYValues);
    };

    const data = {
      labels: xValues,
      datasets: [
        {
          label: 'Dataset 1',
          data: yValues,
          backgroundColor: 'rgba(0, 61, 129, 0.5)',
        },
      ],
    };

    return (
        <div className="flex justify-between">
            <div className="w-1/4 p-4">
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">X</th>
                      <th className="border border-gray-400 px-4 py-2">Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    {xValues.map((xValue, index) => (
                      <tr key={index}>
                        <td className="border border-gray-400 px-4 py-2">{xValue}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            value={yValues[index]}
                            onChange={(e) => handleChange(index, parseInt(e.target.value))}
                            className="w-16 border border-gray-400 rounded px-2 py-1"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddRow}>Add Row</button>
              </div>
              <div className="w-3/4 p-4">
                <Bar data={data} />
              </div>
        </div>
    );
};

export default BarChart;
