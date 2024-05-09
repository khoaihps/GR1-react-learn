import React from 'react';
import Maze from '../Components/Maze';
import Sidebar from '../Components/Sidebar';

const MazePage = () => {

    const maze = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    return (
      <div className=''>
          <Sidebar/>
          <div className="ml-64">
              <Maze maze={maze} />
          </div>
      </div>
    );
};

export default MazePage;
