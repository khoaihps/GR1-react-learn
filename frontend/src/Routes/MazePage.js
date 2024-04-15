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
    <div>
        <Sidebar/>
        <div class="flex p-4 sm:ml-64">
            <Maze maze={maze} />
        </div>
    </div>
  );
};

export default MazePage;
