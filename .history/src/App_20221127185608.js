
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
  return (
    <div className="App">

    <h1 style={{align:"left"}}>Hello</h1>

    <Mapcomp className="map"
    initialViewState={{
      longitude: -122.3868,
      latitude: 47.5667,
      zoom: 7,
    }}
  >
    <NavigationControl/>
  </Mapcomp>
      
    </div>
  );
}

export default App;