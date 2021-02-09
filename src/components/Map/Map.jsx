import React, { useRef, useEffect, useState } from "react";
import ReactMapGL, { Layer, Marker, Source, NavigationControl } from "react-map-gl";

import mapSettings from "../../utils/mapSettings";
import "../Map/Map.css";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -41.292757,
    longitude: 174.790984,
    zoom: 11.5,
    bearing: 0,
    pitch: 0,
    width: "100vw",
    height: "60vh",
  });

  const mapRef = useRef();
  //Fetch the vehicle data
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://api.mevo.co.nz/public/vehicles/all")
      .then((res) => res.json())
      .then((resData) => {
        setVehicles(resData);
      });
  }, [vehicles]);

  //Fetch the HomeZone data and render it
  const [homeZones, setHomeZones] = useState([]);

  useEffect(() => {
    fetch("https://api.mevo.co.nz/public/home-zones/all")
      .then((res) => res.json())
      .then((resData) => {
        setHomeZones(
          <Source type="geojson" data={resData.data} id="source">
          <Layer {...mapSettings.layer.zoneLines}/>
          {/* <Layer {...mapSettings.layer.zoneFill} /> */}
        </Source>
        );
      });
  }, [homeZones]);
  

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        ref={mapRef}
      >
        {homeZones}
        {vehicles.map((marker) => (
          <Marker
            key={
              parseFloat(marker.position.longitude) +
              parseFloat(marker.position.latitude)
            }
            longitude={parseFloat(marker.position.longitude)}
            latitude={parseFloat(marker.position.latitude)}
          >
            <img
              src={marker.iconUrl}
              alt="Mevo vehicle position"
              className="mevo-marker"
            />
          </Marker>
        ))}
        <NavigationControl style={mapSettings.navControl} />
      </ReactMapGL>
    </div>
  );
};

export default Map;
