import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Card, Row, Col } from 'antd';
import FormInput from './FormInput';
import InfoCard from './InfoCard';
import * as L from 'leaflet';
import bbox from '@turf/bbox';
import bboxPolygon from '@turf/bbox-polygon';

const OsmMap = function() {
  const position = [51.505, -0.09];
  const zoom = 13;

  const handleMapCreate = (map) => {
    const bounds = map.getBounds();
    const bboxPoly = bboxPolygon(bbox(bounds));
    L.geoJSON(bboxPoly).addTo(map);
  };

  return (
    <>
    <div className='card-ovelay'>
<div style={{ position: 'absolute' , zIndex: '100' }}>
        <Card style={{ width: '300px', marginBottom: '16px' }}>
          <FormInput />
        </Card>
        <Card style={{ width: '300px' }}>
          <InfoCard />
        </Card>
      </div>
    </div>
    <div style={{ position: 'relative', height: '600px' }}>
      <MapContainer center={position} zoom={zoom} style={{ height: '100%' , zIndex:'0'}} whenCreated={handleMapCreate}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
    </>
  );
};

export default OsmMap;
