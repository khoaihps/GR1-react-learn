import React from 'react';

export const ImageGrid = ({ images, rows, cols }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '1rem' }}>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt={`Grid Item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};