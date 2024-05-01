import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 21.0050373, lng: 105.8456577 });
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Gọi API của Google Maps Geocoding để lấy địa chỉ từ tọa độ mặc định
    fetch(`https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
        } else {
          setAddress('Address not found');
        }
      })
      .catch(error => {
        console.error('Error fetching address:', error);
        setAddress('Cannot fetch address');
      });
  }, [coordinates]);

  return (
    <div className="w-160 h-160 border border-gray-400 rounded-lg overflow-hidden">
      <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Selected Location:</h2>
        <p><strong>Latitude:</strong> {coordinates.lat}</p>
        <p><strong>Longitude:</strong> {coordinates.lng}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Map;
