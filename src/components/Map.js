import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { bbox, bboxPolygon } from '@turf/turf';
import { Card , Row , Col} from 'antd';
import * as L from 'leaflet';



const Map = () => {
  // Define the initial map position and zoom level
  const position = [51.505, -0.09];
  const zoom = 13;

  // Create a reference to the Leaflet map instance
  const mapRef = React.useRef();

  // Define a function that will be called when the map is created
   const handleMapCreate = (map) => {
    // Save a reference to the Leaflet map instance
    mapRef.current = map;

    // Define the bounding box of the map
    const bounds = map.getBounds();

    // Create a bounding box polygon using Turf.js
    const bboxPoly = bboxPolygon(bbox(bounds));

    // Add the bounding box polygon to the map as a GeoJSON layer
    L.geoJSON(bboxPoly).addTo(map);
  };

  return (
    <Row gutter={[16, 16]} style={{overflow:'hidden', margin:'5px',}}>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
       <MapContainer center={position} zoom={zoom} style={{ height: 'calc(100vh - 128px)', width: '100%' }} whenCreated={handleMapCreate}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </Col>
     
    </Row>
  );
};

export default Map;
