import React, { useEffect, useState } from "react";
import './App.css';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"
import { Card,Text } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const[lat, setLat] = useState(47.6038321);
  const[lng, setLng] = useState(-122.330062);


  return (
    <div className="App">
      <NextUIProvider>

      

      <Map
      mapboxAccessToken="pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w"
      style={{
        width:"80vw",
        height:"100vh",
        position:"relative",
        paddingLeft:"20vw"
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
/**
      <Card isHoverable variant="bordered" css={{ 
        mw: "400px",
        width:"20vw",
        height:"100vh",
        position:"absolute",
     }}>
      <Card.Body>
        <Text>Seattle</Text>
      </Card.Body>
    </Card>
      
      <Marker
        longitude={lng}
        latitude={lat}
        />*/