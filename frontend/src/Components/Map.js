import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

export default function Map(){
  const defaultProps = {
    center: {
      lat: 21.005696333691095,
      lng: 105.84331525396728
    },
    zoom: 15,
  };

  const [startLatLng, setStartLatLng] = useState(null);
  const [endLatLng, setEndLatLng] = useState(null);
  const [selectingStart, setSelectingStart] = useState(false);
  const [selectingEnd, setSelectingEnd] = useState(false);
  const [distance, setDistance] = useState(null); 

  const handleStartSelect = () => {
    setSelectingStart(true); 
    setSelectingEnd(false); 
  };

  const handleEndSelect = () => {
    setSelectingStart(false); 
    setSelectingEnd(true);
  };

  const handleMapClick = (event) => {
    if (selectingStart) {
      setStartLatLng({
        lat: event.lat,
        lng: event.lng
      });
    } else if (selectingEnd) {
      setEndLatLng({
        lat: event.lat,
        lng: event.lng
      });
    }
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI/180);
  };

  const haversine = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const handleCalculateDistance = () => {
    if (startLatLng && endLatLng) {
      const distance = haversine(startLatLng.lat, startLatLng.lng, endLatLng.lat, endLatLng.lng);
      setDistance(distance.toFixed(2)); 
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-1/2">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }} 
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={handleMapClick}
        >
        </GoogleMapReact>
      </div>
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <button
            className={`bg-${selectingStart ? 'green' : 'blue'}-500 text-white px-4 py-2 rounded`}
            onClick={handleStartSelect}
            style={{ textAlign: 'left', width: '200px' }}
          >
            <div>Chọn điểm đi:</div>
            <div style={{ marginLeft: '10px' }}>
              <p>Lat: {startLatLng ? startLatLng.lat : 'N/A'}</p>
              <p>Lon: {startLatLng ? startLatLng.lng : 'N/A'}</p>
            </div>
          </button>
        </div>
        <div className="mb-4">
          <button
            className={`bg-${selectingEnd ? 'green' : 'blue'}-500 text-white px-4 py-2 rounded`}
            onClick={handleEndSelect}
            style={{ textAlign: 'left', width: '200px' }}
          >
            <div>Chọn điểm đến:</div>
            <div style={{ marginLeft: '10px' }}>
              <p>Lat: {endLatLng ? endLatLng.lat : 'N/A'}</p>
              <p>Lon: {endLatLng ? endLatLng.lng : 'N/A'}</p>
            </div>
          </button>
        </div>
        <div className="mb-4">
          <button className={`bg-green-500 text-white px-4 py-2 rounded`} onClick={handleCalculateDistance}>Tính khoảng cách</button>
          <p>Khoảng cách: {distance ? `${distance} km` : 'N/A'}</p> 
        </div>
      </div>
    </div>
  );
}
