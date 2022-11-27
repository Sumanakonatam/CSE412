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

      <Card css={{ 
        mw: "400px",
        position:"absolute",
        color:"White",
     }}>
      <Card.Body>
        <Text>A basic card</Text>
      </Card.Body>
    </Card>

      
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