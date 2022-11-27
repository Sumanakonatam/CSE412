import React, { useEffect, useState } from "react";
import './App.css';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"
import { Card,Text } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  //const[lat, setLat] = useState(47.6038321);
  //const[lng, setLng] = useState(-122.330062);
  const [viewport, setViewport] = useState({
    latitude:47.6038321,
    longitude:-122.330062,
    width:"100vw",
    height:"100vh",
    zoom:10
  }) ;

  return (
    <div className="App">
        <NextUIProvider>
      <div
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100vw", // or you can use width: ''
            height: "100vh" // or you can use height: ''
          }}
          >
          <Card isHoverable variant="bordered" css={{ 
            mw: "400px",
            }}>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
      </div>

      <Map
      mapboxAccessToken="pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w"
      style={{
        width:"100vw",
        height:"100vh",
        position:"relative",
      }}
      
      mapStyle="mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72"
      >
        
        
        <NavigationControl
        position="top-right"
        />
        <FullscreenControl/>
        <GeolocateControl/>
        </Map>
        </NextUIProvider>
    </div>
  );
}

export default App;
/**initialViewState={{
        longitude:lng,
        latitude:lat,
      }} 
      
      
      <Marker
        longitude={lng}
        latitude={lat}
        />*/