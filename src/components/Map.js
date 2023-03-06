import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Card, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

const countryCoordinates = {
  'India': [20.5937, 78.9629],
  'United States': [37.0902, -95.7129],
  'United Kingdom': [55.3781, -3.436],
};

const Map = () => {
  const mapRef = useRef();
  const countryName = useSelector((store) => store.formdata.items);
  const [url, setUrl] = useState(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`);

 useEffect(() => {
  if (countryCoordinates[countryName]) {
    const newPosition = countryCoordinates[countryName];
    mapRef.current.flyTo(newPosition, 4);
    setUrl(`https://{s}.tile.openstreetmap.org/{z}/${newPosition[0]}/${newPosition[1]}.png`);
  }
}, [countryName]);


  const position = [20.5937, 78.9629];

  return (
    <Row gutter={[16, 16]} style={{ overflow: 'hidden', margin: '5px' }}>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
        <MapContainer center={position} zoom={4} scrollWheelZoom={false} dragging={false} zoomControl={false}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
            url={url} />
          <Marker position={position} />
        </MapContainer>
      </Col>
    </Row>
  );
};

export default Map;
