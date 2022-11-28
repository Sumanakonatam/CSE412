
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';

function App() {
  return (
    <div className="App">
      
    <Mapcomp
    initialViewState={{
      longitude: -122.3868,
      latitude: 47.5667,
      zoom: 7
    }}
  >
    <NavigationControl />
  </Mapcomp>
      
    </div>
  );
}

export default App;