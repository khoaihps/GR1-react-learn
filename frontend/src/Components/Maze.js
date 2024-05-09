import React, { useState, useEffect } from 'react';

const Maze = ({ maze = [] }) => {
    const lastRowIndex = maze.length - 1;
    const lastColumnIndex = maze[lastRowIndex] ? maze[lastRowIndex].length - 1 : 0;

    const [diamondPosition, setDiamondPosition] = useState({ row: 0, column: 0 });
    const [marioPosition, setMarioPosition] = useState({ row: lastRowIndex, column: lastColumnIndex });

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            let newRow = marioPosition.row;
            let newColumn = marioPosition.column;

            if (key === 'ArrowUp' && marioPosition.row > 0 && maze[marioPosition.row - 1][marioPosition.column] !== 1) {
                newRow--;
            } else if (key === 'ArrowDown' && marioPosition.row < lastRowIndex && maze[marioPosition.row + 1][marioPosition.column] !== 1) {
                newRow++;
            } else if (key === 'ArrowLeft' && marioPosition.column > 0 && maze[marioPosition.row][marioPosition.column - 1] !== 1) {
                newColumn--;
            } else if (key === 'ArrowRight' && marioPosition.column < lastColumnIndex && maze[marioPosition.row][marioPosition.column + 1] !== 1) {
                newColumn++;
            }

            setMarioPosition({ row: newRow, column: newColumn });

            if (newRow === diamondPosition.row && newColumn === diamondPosition.column) {
                setDiamondPosition({ row: -1, column: -1 }); 
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [maze, marioPosition, lastRowIndex, lastColumnIndex, diamondPosition]);

    useEffect(() => {
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                if (maze[i][j] === 2) {
                    setDiamondPosition({ row: i, column: j }); 
                    return;
                }
            }
        }
    }, [maze]);

    const moveMario = (direction) => {
        let newRow = marioPosition.row;
        let newColumn = marioPosition.column;
    
        switch (direction) {
            case 'up':
                newRow--;
                break;
            case 'down':
                newRow++;
                break;
            case 'left':
                newColumn--;
                break;
            case 'right':
                newColumn++;
                break;
            default:
                break;
        }
    
        if (
            newRow >= 0 &&
            newRow <= lastRowIndex &&
            newColumn >= 0 &&
            newColumn <= lastColumnIndex &&
            maze[newRow][newColumn] !== 1
        ) {
            setMarioPosition({ row: newRow, column: newColumn });
    
            if (newRow === diamondPosition.row && newColumn === diamondPosition.column) {
                setDiamondPosition({ row: -1, column: -1 }); 
            }
        }
    };

    const handleReset = () => {
        setMarioPosition({ row: lastRowIndex, column: lastColumnIndex }); 
        setDiamondPosition({ row: 0, column: 0 }); 
    };

    return (
        <div className='grid grid-cols-2 grid-rows-1 border-4 border-blue-900 mx-3 my-4 max-h-screen' >
            <div className="grid my-4 mx-4 border-2 border-blue-900 grid-cols-6 grid-rows-8 gap-0 ">
                {maze.map((row, rowIndex) => (
                    row.map((cell, cellIndex) => {
                        const isDiamondCell = rowIndex === diamondPosition.row && cellIndex === diamondPosition.column;
                        const isMarioCell = rowIndex === marioPosition.row && cellIndex === marioPosition.column;
                        return (
                            <div
                                key={`${rowIndex}-${cellIndex}`}
                                className={` items-center ${cell === 1 ? 'bg-blue-700' : 'bg-white'} border-2 border-blue-900 `}
                            >
                                {isDiamondCell && <img src="https://pngfre.com/wp-content/uploads/diamond-png-image-pngfre-17.png" alt="Diamond" className="w-full h-full" />}
                                {isMarioCell && <img src="https://pngimg.com/uploads/mario/mario_PNG88.png" alt="Mario" className="w-full h-full" />}
                            </div>
                        );
                    })
                ))}
            </div>
            <div className=" border-4 border-blue-900 my-4 mx-3">
                <div className="items-start justify-start space-y-4">
                    <button className="px-6 py-3 text-black text-3xl font-semibold flex items-center justify-center h-1/6" onClick={() => moveMario('up')} >
                        <img className='ml-2 w-12 h-1/6' src="https://img.icons8.com/android/24/000000/up.png" alt="Move Up" />
                        Move Up
                    </button>
                    <button className="px-6 py-3 text-black text-3xl font-semibold flex items-center justify-center h-1/6" onClick={() => moveMario('down')} >
                        <img className='ml-2 w-12 h-1/6' src="https://img.icons8.com/android/24/000000/down.png" alt="Move Down" />
                        Move Down
                    </button>
                    <button className="px-6 py-3 text-black text-3xl font-semibold flex items-center justify-center h-1/6" onClick={() => moveMario('left')} >
                        <img className='ml-2 w-12 h-1/6' src="https://img.icons8.com/android/24/000000/left.png" alt="Move Left" />
                        Move Left
                    </button>
                    <button className="px-6 py-3 text-black text-3xl font-semibold flex items-center justify-center h-1/6" onClick={() => moveMario('right')} >
                        <img className='ml-2 w-12 h-1/6' src="https://img.icons8.com/android/24/000000/right.png" alt="Move Right" />
                        Move Right
                    </button>
                </div>
                <div className='mt-auto px-6 py-3 w-1/6'>
                    <button className="bg-green-500 rounded-xl px-20 py-4 text-white text-4xl mb-4 mr-12 justify-center " onClick={handleReset}>
                        Run
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Maze;
