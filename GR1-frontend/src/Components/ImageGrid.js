import React from 'react';

export const ImageGrid = ({ images, rows, cols }) => {
    return (
        <div className={`grid grid-cols-${cols} gap-4`}>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt={`Image ${index}`} />
                </div>
            ))}
        </div>
    );
};
