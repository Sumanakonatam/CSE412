import React, { useEffect, useState } from "react";
import './App.css';
import Map, {Marker} from "react-map-gl"

function App() {
  const[lat, setLat] = useState(47.6038321);
  const[lng, setLng] = useState(-122.330062);
  return (
    <div className="App">
      <h1>Mapbox</h1>
      <Map
      mapboxAccessToken="pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w"
      style={{
        width:"500px",
        height:"500px",
      }}
      initialViewState={{
        longitude:lng,
        latitude:lat,
      }}
      mapStyle="mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72"
      />
    </div>
  );
}

export default App;
