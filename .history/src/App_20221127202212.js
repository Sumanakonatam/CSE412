
import { Card } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import zIndex from '@mui/material/styles/zIndex';


function App() {

  const { collapseSidebar } = useProSidebar();

  return (
    <div className="App">

    <Mapcomp 
      initialViewState={{
        longitude: -122.3868,
        latitude: 47.5667,
        zoom: 7,
      }}
    >

<NavigationControl position='bottom-right'/>
    </Mapcomp>

  
    <div style={{ display: 'flex', height: '100vh', width:'10vw', zIndex:1 }}>
      <Sidebar>
        <Menu>
        <SubMenu label="Charts">
       <MenuItem> Pie charts </MenuItem>
       <MenuItem> Line charts </MenuItem>
          <MenuItem> Listings</MenuItem>
          <MenuItem> Neighborhoods</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()} >Collapse</button>
      </main>
    </div>
  
    

    </div>

    
  );
}

export default App;