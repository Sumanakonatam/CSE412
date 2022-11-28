
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
  
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="App">

   
<div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>


    <Mapcomp 
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