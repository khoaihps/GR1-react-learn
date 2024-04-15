import React, { useState, useEffect } from 'react';

const Maze = ({ maze = [] }) => {
    const numColumns = maze.length > 0 ? maze[0].length : 0; 
    const lastRowIndex = maze.length - 1;
    const lastColumnIndex = maze[lastRowIndex] ? maze[lastRowIndex].length - 1 : 0;

    const [diamondPosition, setDiamondPosition] = useState({ row: 0, column: 0 });
    const [marioPosition, setMarioPosition] = useState({ row: lastRowIndex, column: lastColumnIndex });

    useEffect(() => {
        // Hàm xử lý sự kiện di chuyển của Mario
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

            // Kiểm tra xem Mario có chạm vào kim cương không
            if (newRow === diamondPosition.row && newColumn === diamondPosition.column) {
                setDiamondPosition({ row: -1, column: -1 }); // Ẩn kim cương
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [maze, marioPosition, lastRowIndex, lastColumnIndex, diamondPosition]);

    useEffect(() => {
        // Tìm vị trí của kim cương ban đầu khi maze thay đổi
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                if (maze[i][j] === 2) {
                    setDiamondPosition({ row: i, column: j }); // Hiển thị kim cương
                    return;
                }
            }
        }
    }, [maze]);

    const moveMario = (direction) => {
        let newRow = marioPosition.row;
        let newColumn = marioPosition.column;
    
        // Xác định hướng di chuyển và cập nhật vị trí mới của Mario
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
    
        // Kiểm tra xem Mario có thể di chuyển đến vị trí mới không
        if (
            newRow >= 0 &&
            newRow <= lastRowIndex &&
            newColumn >= 0 &&
            newColumn <= lastColumnIndex &&
            maze[newRow][newColumn] !== 1
        ) {
            setMarioPosition({ row: newRow, column: newColumn });
    
            // Kiểm tra xem Mario có chạm vào kim cương không
            if (newRow === diamondPosition.row && newColumn === diamondPosition.column) {
                setDiamondPosition({ row: -1, column: -1 }); // Ẩn kim cương
            }
        }
    };

    const handleReset = () => {
        setMarioPosition({ row: lastRowIndex, column: lastColumnIndex }); // Đặt lại vị trí Mario
        setDiamondPosition({ row: 0, column: 0 }); // Hiển thị kim cương
    };

    return (
        <div className='grid flex grid-cols-2 border-4 border-blue-900 mx-3 my-4'>
            <div className="grid my-4 mx-4 border-2 border-blue-900" style={{ gridTemplateColumns: `repeat(${numColumns}, auto)` }}>
                {maze.map((row, rowIndex) => (
                    row.map((cell, cellIndex) => {
                        const isDiamondCell = rowIndex === diamondPosition.row && cellIndex === diamondPosition.column;
                        const isMarioCell = rowIndex === marioPosition.row && cellIndex === marioPosition.column;

                        return (
                            <div
                                key={`${rowIndex}-${cellIndex}`}
                                className={`w-36 h-36 flex items-center justify-center ${cell === 1 ? 'bg-blue-700' : 'bg-white'} border-2 border-blue-900`}
                            >
                                {isDiamondCell && <img src="https://pngfre.com/wp-content/uploads/diamond-png-image-pngfre-17.png" alt="Diamond" className="w-32 h-28" />}
                                {isMarioCell && <img src="https://pngimg.com/uploads/mario/mario_PNG88.png" alt="Mario" className="w-32 h-28" />}
                            </div>
                        );
                    })
                ))}
            </div>
            <div className="flex border-4 border-blue-900 my-4 mx-3">
                <div className="items-start justify-start space-y-4">
                    <button className="px-6 py-3 text-black text-5xl font-semibold flex items-center justify-center" onClick={() => moveMario('up')}>
                        Move Up<img className='ml-2 w-12 h-12' src="https://img.icons8.com/android/24/000000/up.png" alt="Move Up" />
                    </button>
                    <button className="px-6 py-3 text-black text-5xl font-semibold flex items-center justify-center" onClick={() => moveMario('down')}>
                        Move Down<img className='ml-2 w-12 h-12' src="https://img.icons8.com/android/24/000000/down.png" alt="Move Down" />
                    </button>
                    <button className="px-6 py-3 text-black text-5xl font-semibold flex items-center justify-center" onClick={() => moveMario('left')}>
                        Move Left<img className='ml-2 w-12 h-12' src="https://img.icons8.com/android/24/000000/left.png" alt="Move Left" />
                    </button>
                    <button className="px-6 py-3 text-black text-5xl font-semibold flex items-center justify-center" onClick={() => moveMario('right')}>
                        Move Right<img className='ml-2 w-12 h-12' src="https://img.icons8.com/android/24/000000/right.png" alt="Move Right" />
                    </button>
                </div>
                <div className='mt-auto'>
                    <button className="bg-green-500 rounded-xl px-20 py-4 text-white text-4xl mb-4 mr-12 justify-center" onClick={handleReset}>
                        Run
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Maze;
