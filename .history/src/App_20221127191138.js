
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import Sidebar from './sidebar';


function App() {
  return (
    <div className="App">
    <Mapcomp className="map"
    initialViewState={{
      longitude: -122.3868,
      latitude: 47.5667,
      zoom: 7,
    }}
  >
  </Mapcomp>
  
    </div>
  );
}

export default App;