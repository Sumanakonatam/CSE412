import React from 'react';
import { useState,useRef } from 'react';
import { Card, Switch, Spacer, Button, Divider, Row, Col, Dropdown } from '@nextui-org/react';
import { NavigationControl } from 'react-map-gl';
import './App.css';
//import Mapcomp from './Map';
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./App.css";
import axios from 'axios';
import Slider from '@mui/material/Slider';




function App() {

  const [viewport, setViewport] = useState({
    longitude: -122.3868,
    latitude: 47.5667,
    zoom: 7,
    width:"100vw",
    height:"100vh"
  });

  const mapRef = useRef();

  const [neighborhoods, setNeighborhoods] = useState()
  const [data, setData] = useState()
  const [isListing, setisListing] = useState(true)
  const [price, setPrice] = useState([0,300])
  const [minNights, setminNights] = useState(2)
  const [selected, setSelected] = useState(["Entire Home"]);
  const neighurl="http://localhost:8080/neighborhoods"
  const listurl="http://localhost:8080/listings"

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  
  function getData() {

    axios.get(neighurl).then((res) => {
      
      alert(res.data)
      setNeighborhoods(res.data)
    });

    if (isListing == true) {
      let listings = {};
      const array = Array.from(selected)
      alert(array[0])
      for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

        const neighnames=neighborhoods[neighs]["neighborhood_group"]
        axios
          .get(
            `http://localhost:8080/listings/${neighnames}?minPrice=${price[0]}&maxPrice=${price[1]}&home=${array.includes("Entire Home") ? 'yes' : 'no'}&room=${array.includes("Private Room") ? 'yes' : 'no'}&minNights=${minNights}`
          )
          .then((res) => {
            listings[neighnames] = res.data
            //alert(res.data["count"])
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
            //alert(res.data["count"])
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
          <Col span={4}>

            <Switch checked={true} color="primary" onChange={event=>{setisListing(!isListing);alert(isListing)}} /></Col>

          <Col span={4}><p class="inline">Listings</p></Col>
        </Row>

        <Divider css={{ marginBottom: "30px" }} />

        <h3 class="extra">Room Type</h3>
        <Spacer y={0.5} />

        <Dropdown onChange={event=>{alert(event.target.value)}}>
          <Dropdown.Button css={{ backgroundColor: "#3fb1ce", width: '14vw', alignSelf: 'center' }}>{selectedValue}</Dropdown.Button>
          
          <Dropdown.Menu disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}>

            <Dropdown.Item key="Entire Home" onClick={event=>{alert(event.target.value)}}>Entire Home</Dropdown.Item>
            <Dropdown.Item key="Private Room" onClick={event=>{alert(event.target.value)}}>Private Room</Dropdown.Item>
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
        css={{ backgroundColor: "#3fb1ce", width: '14vw', alignSelf: 'center' }}
        
        />

        <Spacer y={2} />
        <Divider css={{ marginBottom: "10px" }} />
        <h3 class="extra ">Minimum Nights</h3>
        <Spacer y={0.5} />

        <Slider range min={0} max={50} defaultValue={2} 
        step = {1}
        valueLabelDisplay="auto" 
        onChange={event=>{}}
        css={{ backgroundColor: "#3fb1ce", width: '10vw', alignSelf: 'center' }}
        />

      </Card>

    )
  }

  return (
    <div className="App">
      {popUp()}
      
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w'
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );

                    setViewport({
                      ...viewport,
                      latitude,
                      longitude,
                      zoom: expansionZoom,
                      transitionInterpolator: new FlyToInterpolator({
                        speed: 2
                      }),
                      transitionDuration: "auto"
                    });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="crime-marker">
                <img src="/custody.svg" alt="crime doesn't pay" />
              </button>
            </Marker>
          );
        })}
      </ReactMapGL>

    </div>

  );
}

export default App;

/*<h3 class = "extra">Hosts or Listings</h3>

<Mapcomp
        initialViewState={{
          longitude: -122.3868,
          latitude: 47.5667,
          zoom: 7,
        }}
      >
        <NavigationControl position='bottom-right' />
      </Mapcomp>*/
