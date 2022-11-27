import React, { useEffect, useState } from "react";
import './App.css';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"

function App() {
  const[lat, setLat] = useState(47.6038321);
  const[lng, setLng] = useState(-122.330062);
  return (
    <div className="App">
      <Map
      mapboxAccessToken="pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w"
      style={{
        width:"100vw",
        height:"100vh",
      }}
      initialViewState={{
        longitude:lng,
        latitude:lat,
      }}
      mapStyle="mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72"
      >
        
        <NavigationControl
        position="top-right"
        />
        <FullscreenControl/>
        <GeolocateControl/>
        </Map>
    </div>
  );
}

export default App;
/**<Marker
        longitude={lng}
        latitude={lat}
        /> */