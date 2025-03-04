import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


import markerIconPng from "leaflet/dist/images/marker-icon.png";

const collegeLocation =[9.290576,77.700974]; 
const CollegeMap = () => {
  const customIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="contact-container">
   
      
    <MapContainer
      center={collegeLocation}
      zoom={15}
      style={{ height: "500px", width: "90%"  }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={collegeLocation} icon={customIcon}>
        <Popup className="map">P.S.R.Engineering College</Popup>
      </Marker>
    </MapContainer><br></br>
<br></br>
<div className="contact-container1">
    <div className="contact-info">
      <h2>Location</h2>
      <p>P.S.R. Engineering College | Sevalpatti<br />
         Sivakasi - 626140 | Virudhunagar (Dist)<br />
         Tamil Nadu | India.</p>

      <h3>Tel.College</h3>
      <p>04562-239600 | 239091 | 239092</p>

      <h3>Fax</h3>
      <p>04562-239284</p>

      <h3>Trust Office</h3>
      <p>04562-221261</p>

      <h3>Fax</h3>
      <p>04562-225261</p>

      <h3>Email</h3>
      <p>contact@psr.edu.in</p>

      <p className="verification-text">
        <strong>Please send all student verification to email id</strong><br />
        examcell@psr.edu.in
      </p>
    </div>

    <div className="contact-form">
      <h2>Get in Touch with us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Phone" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  </div></div>
  );
};

export default CollegeMap;

