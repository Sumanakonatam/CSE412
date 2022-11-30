import React from 'react';
import { useState } from 'react';
import { Card, Switch, Spacer, Button, Divider, Row, Col, Dropdown } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
import Mapcomp from './Map';
import axios from 'axios';
import Slider from '@mui/material/Slider';




function App() {

  const [neighborhoods, setNeighborhoods] = useState()
  const [data, setData] = useState()
  const [isListing, setisListing] = useState()
  const [price, setPrice] = useState()
  const [isHome, setisHome] = useState()
  const [isRoom, setisRoom] = useState()
  const [minNights, setminNights] = useState()
  
  function getData(isListing, minPrice, maxPrice, isHome, isRoom, minNights) {
    isListing=false
    minPrice=0
    maxPrice=500
    isHome="yes"
    isRoom="yes"
    minNights=0

    axios.get(`http://localhost:8080/neighborhoods`).then((res) => {
      alert(res.data)
      setNeighborhoods(res.data)
    });

    if (isListing == true) {
      let listings = {};

      for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

        const neighnames=neighborhoods[neighs]["neighborhood_group"]
        axios
          .get(
            `http://localhost:8080/listings/${neighnames}?minPrice=${minPrice}&maxPrice=${maxPrice}&home=${isHome}&room=${isRoom}&minNights=${minNights}`
          )
          .then((res) => {
            listings[neighnames] = res.data
            alert(res.data["count"])
          });
      }
    }

    else if(isListing==false)
    {
      let hosts={};

      for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

        const neighnames=neighborhoods[neighs]["neighborhood_group"]
        axios
          .get(
            `http://localhost:8080/hosts/${neighnames}`
          )
          .then((res) => {
            hosts[neighnames] = res.data
            alert(res.data["count"])
          });
      }

      
    }
  }



  const popUp = () => {
    return (
      <Card class="container" css={{ mw: "400px", zIndex: 1, width: '20vw', height: '50vh', marginTop: "20vh", marginLeft: "3vh", borderRadius: "10", backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white" }} >

        <Button size="lg" css={{ backgroundColor: "#3fb1ce", width: "1vw", alignSelf: 'center' }} onClick={getData}>↻ </Button>

        <Spacer y={1} />

        <Spacer y={2} />
        <Row>
          <Col span={4}><p class="inline" css={{ font: "10px" }}>Hosts</p></Col>
          <Col span={4}><Switch checked={true} color="primary" /></Col>
          <Col span={4}><p class="inline">Listings</p></Col>
        </Row>
        <Divider css={{ marginBottom: "30px" }} />

        <h3 class="extra">Room Type</h3>
        <Spacer y={0.5} />

        <Dropdown onChange={event=>{alert(event.target.value)}}>
          <Dropdown.Button css={{ backgroundColor: "#3fb1ce", width: '14vw', alignSelf: 'center' }}>Select A Room Type</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item onClick={event=>{alert(event.target.value)}}>Entire Home</Dropdown.Item>
            <Dropdown.Item onClick={event=>{alert(event.target.value)}}>Private Room</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Spacer y={2} />
        <Divider css={{ marginBottom: "35px" }} />
        <h3 class="extra">Price</h3>

        <Spacer y={0.5} />
        <Slider range min={0} max={1000} defaultValue={[0,300]} 
        step = {10}
        valueLabelDisplay="auto" 
        onChange={event=>{alert(event.target.value)}}
        />

        <Spacer y={2} />
        <Divider css={{ marginBottom: "10px" }} />
        <h3 class="extra ">Minimum Nights</h3>
        <Spacer y={0.5} />

        <Slider range min={0} max={50} defaultValue={[2]} 
        step = {1}
        valueLabelDisplay="auto" 
        marginLeft="10px"
        marginRight="10px"
        onChange={event=>{alert(event.target.value)}}
        />

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
        <NavigationControl position='bottom-right' />
      </Mapcomp>
    </div>

  );
}

export default App;

/*<h3 class = "extra">Hosts or Listings</h3>*/