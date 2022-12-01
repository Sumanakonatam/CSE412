import React from 'react';
import mapboxgl from 'mapbox-gl';
//import getData from 'App.js';
//import{neighborhoods, data} from 'App.js'


mapboxgl.accessToken='pk.eyJ1Ijoic2FtZWVoc3VoYWlsIiwiYSI6ImNsYXltY3YwMjEwZWwzbm44NWNrZDFuNHIifQ.TxMGHqwzrfCJ81W-H0xI5w';

/*
const data = [
	{
		"location": "West Seattle",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3868,47.5667],
	},
	{
		"location": "Central District",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.2964,47.6088],
	},
	{
		"location": "Capitol hill",
		"city": "Seattle",
		"state": "Washington",
		"coordinates": [-122.3222,47.6253],
	}
] */

const MapboxCircle = require('mapbox-gl-circle');


  /*if (isListing == true) {
	let listings = {};
	const array = Array.from(selected)
	alert(array[0])
	for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

	  const neighlat=neighborhoods[neighs]["latitude"]
	  const neighlong=neighborhoods[neighs]["longitude"]
	  axios
		.get(
			`http://localhost:8080/hosts/${neighlat}`
			`http://localhost:8080/hosts/${neighlong}`
		)
		.then((res1) => {
			listings[neighlat] = res1.data
		  	alert(res1.data["count"])
		})

		.then((res2) => {
			listings[neighlong] = res2.data
		  	alert(res2.data["count"])
		});
	}
  }

  else if(isListing==false)
  {
	let hosts={};

	for (let neighs = 0; neighs < neighborhoods.length; neighs++) {

		const neighlat=neighborhoods[neighs]["latitude"]
		const neighlong=neighborhoods[neighs]["longitude"]
	  axios
		.get(
			`http://localhost:8080/hosts/${neighlat}`
			`http://localhost:8080/hosts/${neighlong}`
		)
		.then((res1) => {
			hosts[neighlat] = res1.data
		  	alert(res1.data["count"])
		})

		.then((res2) => {
			hosts[neighlong] = res2.data
		  	alert(res2.data["count"])
		});
	}

  }*/



class Mapcomp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			neighborhoods: props.neighborhoods,
			data: props.data
		}
	}
	
	componentDidMount(){

		
		const neighborhoods = this.state[neighborhoods]

		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		for (let i = 0; i < neighborhoods.length; i++) {
			alert(neighborhoods[i])
		}

		var myCircle = new MapboxCircle({lat: 47.6062, lng: -122.3321}, 2500, {
			editable: false,
			minRadius: 1500,
			fillColor: '#29AB87'
		}).addTo(map);

	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100vw', height:'100vh', position:'static', zIndex:2}}/>
			</div>
		)
	}
}

export default Mapcomp;


/*
data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(Mapcomp);

		})*/