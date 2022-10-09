import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

function App() {
  return (
    <div className="App">

<MapContainer center={[40.505, -100.09]} zoom={13} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
   
    <Marker position={[40.505, -100.09]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>
  
  
  </MapContainer>

    </div>

    
  );
}

export default App;
