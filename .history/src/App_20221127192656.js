
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Fcard from './Card';
import Mapcomp from './Map';
import Sidebar from './sidebar';


function App() {
  return (
    <div className="App">
    <Mapcomp 
    initialViewState={{
      longitude: -122.3868,
      latitude: 47.5667,
      zoom: 7,
    }}
  >
  </Mapcomp>
  <Fcard/>
  
    </div>
  );
}

export default App;