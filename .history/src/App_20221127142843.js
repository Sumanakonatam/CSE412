
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';

function App() {
  return (
    <div className="App">
       return <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <NavigationControl />
  </Map>;
      <Mapcomp />
      
    </div>
  );
}

export default App;