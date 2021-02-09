import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactMapGL, { Layer, Marker, Source, NavigationControl } from "react-map-gl";

import mapSettings from "../../utils/mapSettings";
import "../Map/Map.css";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -41.30601,
    longitude: 174.79062,
    zoom: 11.75,
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
        </Source>
        );
      });
  }, [homeZones]);
  

  return (
    <div>
      <Container>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        scrollZoom={false}
        ref={mapRef}
      >
        {homeZones}
        {vehicles.map((marker, index) => (
          <Marker
            key={index}
            longitude={parseFloat(marker.position.longitude)}
            latitude={parseFloat(marker.position.latitude)}
            offsetTop={-20}
            offsetLeft={-10}
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
      </Container>
    </div>
  );
};

export default Map;
