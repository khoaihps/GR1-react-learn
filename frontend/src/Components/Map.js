import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

export default function Map(){
  const defaultCenter = [21.005696333691095, 105.84331525396728];
  const defaultZoom = 15;

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

  const calculateDistance = async (start, end) => {
    const API_KEY = "8cdca9d6-3cd3-4fff-b35c-16dcaa35d2ab";
    const url = `https://graphhopper.com/api/1/route?key=${API_KEY}&point=${start.lat},${start.lng}&point=${end.lat},${end.lng}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.paths && data.paths.length > 0) {
        const distanceInMeters = data.paths[0].distance;
        const distanceInKm = distanceInMeters / 1000;
        setDistance(distanceInKm.toFixed(2));
      }
    } catch (error) {
      console.error('Error calculating distance:', error);
    }
  };

  function MapEvents() {
    useMapEvents({
      click: (event) => {
        if (selectingStart) {
          setStartLatLng({
            lat: event.latlng.lat,
            lng: event.latlng.lng
          });
        } else if (selectingEnd) {
          setEndLatLng({
            lat: event.latlng.lat,
            lng: event.latlng.lng
          });
        }
      },
    });
    return null;
  }

  return (
    <div className="flex">
      <div className="h-screen w-1/2">
        <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents />
          {startLatLng && <Marker position={startLatLng}><Popup>Điểm đi</Popup></Marker>}
          {endLatLng && <Marker position={endLatLng}><Popup>Điểm đến</Popup></Marker>}
        </MapContainer>
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
        <button className={`bg-green-500 text-white px-4 py-2 rounded`} onClick={() => calculateDistance(startLatLng, endLatLng)}>Tính khoảng cách</button>
          <p>Khoảng cách: {distance ? `${distance} km` : 'N/A'}</p> 
        </div>
      </div>
    </div>
  );
}
