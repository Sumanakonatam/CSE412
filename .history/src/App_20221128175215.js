import { Card, Switch, Spacer, Button,Text, Divider, Checkbox, Row, Col, Dropdown,DropdownVariants} from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { BsList} from 'react-icons/bs';  
import { color } from '@mui/system';


function App() {


  const popUp = () => {
    return (    
        <Card class = "container" css={{ mw: "400px", zIndex:1, width:'30vw', height:'100vh'}} >
       <Button size="lg">↻ Refresh</Button>
         <Spacer y={1} />
            <h3 class = "extra">Hosts or Listings</h3>
            <Spacer y = {2} />
            <Row>
            <Col span={4}><p class="inline">Hosts</p></Col>
                <Col span={4}><Switch checked = {true}/></Col>
                <Col span={4}><p class = "inline">Listings</p></Col>
            </Row>
            <Divider />
            <h3 class = "extra">Price</h3>
            <Spacer y = {0.5} />
            <Dropdown>
                <Dropdown.Button>Select A Price Range</Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Item>0-100</Dropdown.Item>
                    <Dropdown.Item>100-200</Dropdown.Item>
                    <Dropdown.Item>200-300</Dropdown.Item>
                    <Dropdown.Item>300-400</Dropdown.Item>
                    <Dropdown.Item>400-500</Dropdown.Item>
                    <Dropdown.Item>500-600</Dropdown.Item>
                    <Dropdown.Item>600-700</Dropdown.Item>
                    <Dropdown.Item>700-800</Dropdown.Item>
                    <Dropdown.Item>800-900</Dropdown.Item>
                    <Dropdown.Item>900-1000</Dropdown.Item>
                    <Dropdown.Item>1000-1100</Dropdown.Item>
                    <Dropdown.Item>1100-1200</Dropdown.Item>
                    <Dropdown.Item>1200-1300</Dropdown.Item>
                    <Dropdown.Item>1300-1400</Dropdown.Item>
                    <Dropdown.Item>1400-1500</Dropdown.Item>
                    <Dropdown.Item>1500-1600</Dropdown.Item>
                    <Dropdown.Item>1600-1700</Dropdown.Item>
                    <Dropdown.Item>1700-1800</Dropdown.Item>
                    <Dropdown.Item>1800-1900</Dropdown.Item>
                    <Dropdown.Item>1900-2000</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Spacer y = {2} />
            <Divider />
            <h3 class = "extra">Room Type</h3>
            <Spacer y = {0.5} />
            <Dropdown>
                <Dropdown.Button>Select A Room Type</Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Item>Entire Home</Dropdown.Item>
                    <Dropdown.Item>Private Room</Dropdown.Item>
                    <Dropdown.Item>Shared Room</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Spacer y = {2} />
            <Divider />
            <h3 class = "extra ">Minimum Nights</h3>
            <Spacer y = {0.5} />
            <Dropdown>
                <Dropdown.Button>Select Minimum No. of Night</Dropdown.Button>
                <Dropdown.Menu>
                    <Dropdown.Item>1-5</Dropdown.Item>
                    <Dropdown.Item>5-10</Dropdown.Item>
                    <Dropdown.Item>10-15</Dropdown.Item>
                    <Dropdown.Item>15-20</Dropdown.Item>
                    <Dropdown.Item>20-25</Dropdown.Item>
                    <Dropdown.Item>25-30</Dropdown.Item>
                    <Dropdown.Item>30-35</Dropdown.Item>
                    <Dropdown.Item>35-40</Dropdown.Item>
                    <Dropdown.Item>40-45</Dropdown.Item>
                    <Dropdown.Item>45-50</Dropdown.Item>
                    <Dropdown.Item>50-55</Dropdown.Item>
                    <Dropdown.Item>55-60</Dropdown.Item>
                    <Dropdown.Item>60-65</Dropdown.Item>
                    <Dropdown.Item>65-70</Dropdown.Item>
                    <Dropdown.Item>70-75</Dropdown.Item>
                    <Dropdown.Item>75-80</Dropdown.Item>
                    <Dropdown.Item>80-85</Dropdown.Item>
                    <Dropdown.Item>85-90</Dropdown.Item>
                    <Dropdown.Item>90-95</Dropdown.Item>
                    <Dropdown.Item>95-100</Dropdown.Item>
                    <Dropdown.Item>100-105</Dropdown.Item>
                    <Dropdown.Item>105-110</Dropdown.Item>
                    <Dropdown.Item>110-115</Dropdown.Item>
                    <Dropdown.Item>115-120</Dropdown.Item>
                    <Dropdown.Item>120-125</Dropdown.Item>
                    <Dropdown.Item>125-130</Dropdown.Item>
                    <Dropdown.Item>130-135</Dropdown.Item>
                    <Dropdown.Item>135-140</Dropdown.Item>
                    <Dropdown.Item>140-145</Dropdown.Item>
                    <Dropdown.Item>145-150</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Card>
       
    )
  }

  return (
    <div className="App">
        {popUp()}
        <Mapcomp 
            initialViewState={{
                longitude: -122.3868,
                latitude: 47.5667,
                zoom: 7,
            }}
        >
            <NavigationControl position='bottom-right'/>
        </Mapcomp>
    </div>
    
  );
}

export default App;