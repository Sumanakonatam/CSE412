
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';

function App() {
  return (
    <div className="App">
      
    <Mapcomp
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 7
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <NavigationControl />
  </Mapcomp>
      
    </div>
  );
}

export default App;