import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { CircleMarker, Tooltip, Polygon, tooltip, Circle, L } from "leaflet";

const SimpleExample = () => {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [zoom, setZoom] = useState(1.4);
  const position = [lat, lng];
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/confirmed"
      ).then(res => res.json());
      setLocations(response);
    }
    fetchData();
  }, []);
  const myIcon = L.icon({
    iconUrl: require("../css/red.png"),
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });
  return (
    <div>
      <button onClick={() => console.log(locations)} />
      <Map
        style={{ width: "700px", height: "380px" }}
        center={position}
        zoom={zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations &&
          locations.map(location => (
            <Marker
              position={[location.lat, location.long]}
              key={location.lat}
              icon={myIcon}
            />
          ))}
      </Map>
    </div>
  );
};

export default SimpleExample;
